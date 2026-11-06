// Renderiza os criativos de criativos.html em MP4 (1080x1920, 30fps).
// Uso: node videos/render.js [nome-do-video]
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const FPS = 30;
const outDir = path.join(__dirname, "out");
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
  await page.goto("file://" + path.join(__dirname, "criativos.html"));
  await page.evaluate(() => document.fonts.ready);
  const names = process.argv[2] ? [process.argv[2]] : await page.evaluate(() => Object.keys(window.VIDEOS));

  for (const name of names) {
    const dur = await page.evaluate(n => window.totalDur(n), name);
    const frames = Math.round(dur * FPS);
    const file = path.join(outDir, name + ".mp4");
    const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
      "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-preset", "medium", "-movflags", "+faststart", file]);
    for (let i = 0; i < frames; i++) {
      await page.evaluate(([n, t]) => window.render(n, t), [name, i / FPS]);
      const buf = await page.screenshot({ type: "jpeg", quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
    }
    ff.stdin.end();
    await new Promise((res, rej) => ff.on("close", c => (c === 0 ? res() : rej(new Error("ffmpeg " + c)))));
    console.log(`✓ ${file} (${dur.toFixed(1)}s)`);
  }
  await browser.close();
})();
