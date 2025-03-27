import { readFile } from "node:fs/promises";
import { Agent, fetch } from "undici";

try {
  const ca = await readFile(import.meta.dirname + "/bankid-test.cer", "utf-8");
  const pfx = await readFile(import.meta.dirname + "/FPTestCert5_20240610.p12");

  fetch(new URL("/auth", "https://appapi2.test.bankid.com/rp/v5"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      endUserIp: "127.168.22.1",
      personalNumber: "201507016416",
    }),
    dispatcher: new Agent({
      connect: {
        ca,
        pfx,
        passphrase: "qwerty123",
      },
    }),
  })
    .then(async (response) => {
      if (response.ok) {
        const b = await response.json();
        return;
      } else {
        console.error("Error", response.status);
      }
    })
    .catch(console.error);
} catch (e) {
  console.error(e);
}
