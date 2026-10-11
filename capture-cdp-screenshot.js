import { spawn } from "child_process";
import http from "http";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const userData = "C:\\Users\\vibhu\\.gemini\\antigravity-ide\\scratch\\chrome_temp";
const port = 9222;

const chromeProcess = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userData}`,
  "about:blank"
]);

// Wait 1 second for Chrome to start
setTimeout(async () => {
  try {
    const listRes = await fetch(`http://localhost:${port}/json`);
    const pages = await listRes.json();
    const page = pages[0];
    if (!page || !page.webSocketDebuggerUrl) {
      throw new Error("No webSocketDebuggerUrl found");
    }

    const ws = new globalThis.WebSocket(page.webSocketDebuggerUrl);

    let id = 1;
    const send = (method, params = {}) => {
      return new Promise((resolve) => {
        const msgId = id++;
        const handler = (event) => {
          const res = JSON.parse(event.data);
          if (res.id === msgId) {
            ws.removeEventListener("message", handler);
            resolve(res.result);
          }
        };
        ws.addEventListener("message", handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    };

    ws.addEventListener("open", async () => {
      // 1. Set accurate mobile device metrics (390 x 844 iPhone 14/15)
      await send("Emulation.setDeviceMetricsOverride", {
        width: 390,
        height: 844,
        deviceScaleFactor: 1,
        mobile: true
      });

      // 2. Navigate to preview server
      await send("Page.navigate", { url: "http://localhost:4173/" });
      await new Promise(r => setTimeout(r, 1500));

      // 3. Capture screenshot
      const { data } = await send("Page.captureScreenshot", { format: "png" });
      const fs = await import("fs");
      fs.writeFileSync("cdp_mobile_390.png", Buffer.from(data, "base64"));
      console.log("SUCCESS: cdp_mobile_390.png captured via CDP mobile emulation!");

      // 4. Capture 360px
      await send("Emulation.setDeviceMetricsOverride", {
        width: 360,
        height: 800,
        deviceScaleFactor: 1,
        mobile: true
      });
      await new Promise(r => setTimeout(r, 500));
      const res360 = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync("cdp_mobile_360.png", Buffer.from(res360.data, "base64"));
      console.log("SUCCESS: cdp_mobile_360.png captured via CDP mobile emulation!");

      ws.close();
      chromeProcess.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error("CDP Error:", err.message);
    chromeProcess.kill();
    process.exit(1);
  }
}, 1500);
