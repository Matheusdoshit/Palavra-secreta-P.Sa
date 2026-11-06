// Gera em ./entrega:
//   - Familia-em-Paz.pdf               (A4, 37 páginas, para imprimir ou ler no tablet)
//   - Amostra-gratis-Familia-em-Paz.pdf (capa, método e Noite 1)
//   - previa/*.png                      (imagens das páginas para a página de vendas e os vídeos)
// Uso: node produtos/familia-em-paz/build.js
const { chromium } = require("playwright");
const { execFileSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const dir = __dirname, out = path.join(dir, "entrega"), prev = path.join(out, "previa");
fs.mkdirSync(prev, { recursive: true });

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto("file://" + path.join(dir, "livro.html"));
  await p.evaluate(() => document.fonts.ready);
  await p.emulateMedia({ media: "print" });
  await p.evaluate(() => window.fitDraw());
  const pdf = path.join(out, "Familia-em-Paz.pdf");
  await p.pdf({ path: pdf, format: "A4", printBackground: true, preferCSSPageSize: true });

  // Checagem: nenhum conteúdo pode invadir a área de desenho nem o rodapé.
  const problemas = await p.evaluate(() => [...document.querySelectorAll(".pg")].map((pg, i) => {
    const draw = pg.querySelector(".draw");
    const limit = draw ? draw.getBoundingClientRect().top - 6 : pg.getBoundingClientRect().bottom - 40;
    let max = 0;
    pg.querySelectorAll(".story,.row2,.pill,.idx,.three,.tip,.board,.stk,.pp").forEach(e => max = Math.max(max, e.getBoundingClientRect().bottom));
    const minDraw = draw ? pg.getBoundingClientRect().bottom - draw.getBoundingClientRect().top : 999;
    return max > limit ? `pág ${i + 1}: invade ${Math.round(max - limit)}px` : (minDraw < 230 ? `pág ${i + 1}: área de desenho pequena (${Math.round(minDraw)}px)` : null);
  }).filter(Boolean));
  console.log(problemas.length ? problemas.join("\n") : "✓ layout ok");

  // Prévias em PNG das páginas principais
  const pages = { "capa": 1, "metodo": 2, "noite-03": 6, "quadro": 34, "adesivos": 35 };
  for (const [name, n] of Object.entries(pages))
    execFileSync("pdftoppm", ["-r", "110", "-png", "-singlefile", "-f", String(n), "-l", String(n), pdf, path.join(prev, name)]);

  // Amostra grátis: capa + método + Noite 1 (páginas 1, 2 e 4)
  const tmp = fs.mkdtempSync(path.join(require("os").tmpdir(), "fp-"));
  execFileSync("pdfseparate", ["-f", "1", "-l", "4", pdf, path.join(tmp, "s-%d.pdf")]);
  execFileSync("pdfunite", [1, 2, 4].map(n => path.join(tmp, `s-${n}.pdf`)).concat(path.join(out, "Amostra-gratis-Familia-em-Paz.pdf")));
  await b.close();
  console.log("✓ entregáveis em", out);
})();
