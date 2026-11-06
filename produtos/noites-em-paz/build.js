// Gera os entregáveis do Noites em Paz em ./entrega:
//   - Noites-em-Paz.pdf            (livro A5, lê no celular e imprime)
//   - papeis-de-parede/*.png       (8 telas de bloqueio 1080x2340)
//   - roteiros-de-audio.md         (7 roteiros prontos para gravar, com pausas marcadas)
// Uso: node produtos/noites-em-paz/build.js
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
const { NOITES, TRES_DA_MANHA } = require("./conteudo.js");

const dir = __dirname, out = path.join(dir, "entrega"), wp = path.join(out, "papeis-de-parede");
fs.mkdirSync(wp, { recursive: true });

function roteiros() {
  const P = s => `\n*[pausa ${s}s]*\n`;
  let md = `# Noites em Paz: roteiros de áudio\n\n` +
    `**Como gravar:** use voz baixa e lenta (cerca de 120 palavras por minuto), no celular, dentro do guarda-roupa ou embaixo de um cobertor, que abafa o eco. ` +
    `Coloque um fundo de piano ou de chuva bem baixo (-25 dB). Cada áudio fica com 4 a 5 minutos. Exporte em MP3, 128 kbps.\n\n` +
    `**Legenda:** *[pausa Ns]* = silêncio. **INSPIRA / EXPIRA** = fale devagar, no ritmo da respiração.\n\n---\n`;
  for (const nt of NOITES) {
    md += `\n## Noite ${nt.n}: ${nt.titulo}\n\n`;
    md += `Boa noite. Esta é a noite ${nt.n} de 7. Deite do jeito mais confortável que puder. Deixe o papel e a caneta perto de você.${P(3)}`;
    md += `Hoje é a noite de um pensamento muito conhecido: ${nt.pensamento.replace(/[“”]/g, "")}${P(3)}`;
    md += nt.reflexao.join(P(2)) + P(3);
    md += `Agora, abra a gaveta. ${nt.gaveta}${P(20)}`;
    md += `Ouça a Palavra desta noite. ${nt.ref.replace(":", ", versículo ").replace("-", " a ")}.${P(1)}\n> ${nt.palavra}\n${P(3)}`;
    md += `Vamos orar juntos.${P(2)}\n> ${nt.oracao}\n${P(4)}`;
    md += `Agora, a Respiração da Palavra. Eu falo, você só respira. Seis vezes.${P(2)}\n`;
    for (let i = 1; i <= 6; i++) md += `- ${i}. **INSPIRA** (4s): *${nt.inspira}*… **EXPIRA** (6s): *${nt.expira}*…\n`;
    md += P(5);
    md += nt.n < 7
      ? `Amanhã cedo, só uma coisa: ${nt.amanha}${P(2)}Por hoje, o assunto está guardado. Boa noite.\n`
      : `${nt.amanha}${P(2)}Você completou as sete noites. Boa noite, e que essa paz fique.\n`;
    md += `\n---\n`;
  }
  md += `\n## Bônus: ${TRES_DA_MANHA.titulo} (áudio curto, cerca de 1 min 30 s)\n\n` +
    `Se você acordou agora, não pegue o celular depois deste áudio, e não olhe a hora.${P(2)}` +
    TRES_DA_MANHA.passos.map(([a, b]) => `${a} ${b}`).join(P(2)) + P(3) +
    `> ${TRES_DA_MANHA.palavra} (${TRES_DA_MANHA.ref})\n${P(2)}` +
    Array.from({ length: 6 }, (_, i) => `- ${i + 1}. **INSPIRA**: *Medito em ti*… **EXPIRA**: *nas vigílias da noite*…`).join("\n") + "\n";
  return md;
}

(async () => {
  fs.writeFileSync(path.join(out, "roteiros-de-audio.md"), roteiros());
  const browser = await chromium.launch();

  const book = await browser.newPage();
  await book.goto("file://" + path.join(dir, "livro.html"));
  await book.evaluate(() => document.fonts.ready);
  await book.pdf({ path: path.join(out, "Noites-em-Paz.pdf"), width: "148mm", height: "210mm", printBackground: true, preferCSSPageSize: true });

  const w = await browser.newPage({ viewport: { width: 540, height: 1170 }, deviceScaleFactor: 2 });
  await w.goto("file://" + path.join(dir, "wallpapers.html"));
  await w.evaluate(() => document.fonts.ready);
  for (let i = 0; i < 8; i++) {
    await w.evaluate(i => window.show(i), i);
    const name = i < 7 ? `noite-${i + 1}.png` : `bonus-3h-da-manha.png`;
    await w.screenshot({ path: path.join(wp, name) });
  }
  await browser.close();
  console.log("✓ entregáveis em", out);
})();
