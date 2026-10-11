import { execSync } from "child_process";

const viewports = [
  { width: 360, height: 800, name: "360px Compact Mobile" },
  { width: 390, height: 844, name: "390px Standard Mobile" },
  { width: 768, height: 1024, name: "768px Tablet Portrait" },
  { width: 1024, height: 800, name: "1024px Tablet Landscape" },
  { width: 1280, height: 800, name: "1280px Standard Desktop" },
  { width: 1440, height: 900, name: "1440px Large Desktop" },
  { width: 1920, height: 1080, name: "1920px Full HD Desktop" }
];

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const userData = "C:\\Users\\vibhu\\.gemini\\antigravity-ide\\scratch\\chrome_temp";

console.log("==================================================");
console.log("Viewport Anti-Overflow & Layout Integrity Verification");
console.log("==================================================");

let allPassed = true;

viewports.forEach(vp => {
  const cmd = `"${chromePath}" --headless=new --disable-gpu --user-data-dir="${userData}" --window-size=${vp.width},${vp.height} --virtual-time-budget=2000 --dump-dom "http://localhost:4173/"`;
  try {
    const stdout = execSync(cmd, { encoding: "utf-8", timeout: 15000 });
    const match = stdout.match(/data-overflow="([^"]+)"/);
    const status = match ? match[1] : "UNKNOWN";
    if (status === "NONE") {
      console.log(`[PASS] ${vp.name.padEnd(26)} -> data-overflow: NONE (0 horizontal overflow)`);
    } else {
      console.error(`[FAIL] ${vp.name.padEnd(26)} -> Overflow elements: ${status}`);
      allPassed = false;
    }
  } catch (err) {
    console.error(`[ERROR] ${vp.name}:`, err.message);
    allPassed = false;
  }
});

console.log("==================================================");
if (allPassed) {
  console.log("ALL VIEWPORTS PASSED: ZERO HORIZONTAL OVERFLOW DETECTED");
  process.exit(0);
} else {
  console.error("SOME VIEWPORTS FAILED");
  process.exit(1);
}
