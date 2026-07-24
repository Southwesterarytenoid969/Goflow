#!/usr/bin/env python3
import json
import sys


def main():
    payload = json.load(sys.stdin)
    trigger = payload.get("outputs", {}).get("$trigger", {})
    body = trigger.get("body", {}) if isinstance(trigger, dict) else {}

    required = ["email", "message"]
    missing = [field for field in required if not body.get(field)]

    if missing:
        print(json.dumps({
            "result": {
                "valid": False,
                "status": "invalid",
                "missing": missing
            }
        }))
        return

    print(json.dumps({
        "result": {
            "valid": True,
            "status": "valid",
            "email": body.get("email"),
            "message_length": len(str(body.get("message", "")))
        }
    }))


if __name__ == "__main__":
    main()

