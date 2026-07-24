#!/usr/bin/env node

let raw = "";
process.stdin.on("data", (chunk) => {
  raw += chunk;
});

process.stdin.on("end", () => {
  const input = JSON.parse(raw || "{}");
  const text = JSON.stringify(input.outputs || {});
  const redacted = text
    .replace(/sk-[A-Za-z0-9_-]{12,}/g, "sk-REDACTED")
    .replace(/Bearer\s+[A-Za-z0-9._-]+/g, "Bearer REDACTED")
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "email@example.com");

  process.stdout.write(JSON.stringify({
    result: {
      status: "redacted",
      redacted_json: redacted
    }
  }));
});

