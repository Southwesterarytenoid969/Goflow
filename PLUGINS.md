# Goflow Plugin Guide

Goflow plugins are local executables stored in `./plugins/`.

The `goflowPlugin` node starts the executable, sends a JSON payload through stdin, and reads JSON from stdout. This lets users extend Goflow with any language that can read stdin and print JSON.

---

## Plugin Contract

Input from Goflow:

```json
{
  "node_id": "plugin_node_1",
  "params": {
    "plugin_name": "my_plugin.exe"
  },
  "outputs": {
    "$trigger": {
      "body": {
        "email": "user@example.com"
      }
    }
  },
  "workflow_id": "12",
  "execution_id": "34"
}
```

Expected stdout:

```json
{
  "result": {
    "status": "ok",
    "message": "Plugin completed"
  }
}
```

Error stdout:

```json
{
  "error": "Human readable error message"
}
```

If stdout is raw JSON without a `result` wrapper, Goflow will return that JSON directly.

---

## Security Model

Plugins are executable code. Treat them like trusted local programs.

Rules enforced by Goflow:

- `plugin_name` must be a filename only.
- Absolute paths are rejected.
- Path traversal is rejected.
- Plugins must live inside `./plugins/`.
- Plugin execution has a 15 second timeout.

Operational recommendations:

- Do not install plugins from untrusted sources.
- Review plugin source before running it.
- Keep secrets in Goflow Credentials, not hardcoded in plugin files.
- Run Goflow under a low-privilege OS user if plugins are enabled.
- Prefer small single-purpose plugins.

---

## Example Plugin Ideas

| Plugin | Use case |
| :--- | :--- |
| Payload validator | Validate required webhook fields before the workflow continues. |
| Secret redactor | Remove tokens, passwords, emails, or phone numbers before sending logs to chat tools. |
| Domain classifier | Classify leads by email domain, company type, or region. |
| PDF invoice parser | Extract invoice number, total amount, and vendor from a PDF path. |
| Image optimizer | Compress generated/uploaded images before sending to storage. |
| CSV normalizer | Convert messy CSV rows into clean JSON for Google Sheets or databases. |
| Internal API signer | Add custom HMAC/JWT signatures required by private APIs. |
| File watcher helper | Return a list of changed local files for a scheduled workflow. |
| Alert deduplicator | Check recent incident fingerprints before sending noisy alerts. |
| Deployment policy checker | Block deploy workflows unless branch, time window, and approvals are valid. |

---

## Sample Plugins

Sample source files are in `plugins/examples/`.

They are examples only. Put compiled or executable versions in `./plugins/` before using them in a `goflowPlugin` node.

### Python: payload validator

File: `plugins/examples/payload_validator.py`

Use it to check whether a webhook payload contains required fields such as `email` and `message`.

Windows example:

```powershell
python plugins\examples\payload_validator.py
```

For production use, package it as an executable and place it in `plugins/payload_validator.exe`, or run it through a small wrapper executable.

### Node.js: secret redactor

File: `plugins/examples/secret_redactor.js`

Use it before sending payloads to Slack, Discord, Telegram, or AI models.

### Go: lead scorer

File: `plugins/examples/lead_scorer.go`

Compile it:

```bash
go build -o plugins/lead_scorer plugins/examples/lead_scorer.go
```

Windows:

```powershell
go build -o plugins\lead_scorer.exe plugins\examples\lead_scorer.go
```

Then configure the plugin node:

```json
{
  "plugin_name": "lead_scorer.exe"
}
```

---

## Recommended Plugin Pattern

Keep plugins deterministic:

1. Read stdin.
2. Parse JSON.
3. Validate expected fields.
4. Return a compact `result` object.
5. Print only JSON to stdout.
6. Print diagnostics to stderr only when returning an error.

Avoid long-running background processes. If a task takes longer than 15 seconds, call it through an HTTP service instead of a plugin executable.

