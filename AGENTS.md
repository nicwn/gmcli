# gmcli — scope-narrowed fork (nicwn/gmcli)

Fork of @mariozechner/gmcli, maintained for personal use. Upstream is
github.com/badlogic/gmcli (npm: @mariozechner/gmcli). **Never `npm install -g
@mariozechner/gmcli`** — upstream requests the broad `https://mail.google.com/`
scope, which grants permanent delete. This fork deliberately does not.

## Hard rules

- **Never widen the OAuth scopes.** `src/gmail-oauth-flow.ts` must keep
  `SCOPES` at `gmail.readonly` + `gmail.modify` (read, labels, trash, send —
  no `messages.delete`). Any change touching SCOPES stops for human review.
- **Never commit or rotate `~/.gmcli/` contents** (credentials/tokens) —
  credential sovereignty belongs to the human.
- Re-auth flows are user-executed; the CLI may only *instruct*.

## Dev process (follow it)

1. Read the relevant `src/*.ts` before editing; `dist/` is generated — run
   `npm run build` after any change (the global install symlinks `dist/`).
2. `npm run check` (biome + typecheck) must pass before finishing.
3. Before declaring work done: run a fresh-eyes review of the full diff
   (the `fresh-eyes-review` skill) and an independent review with
   `roborev` (binary: `~/.local/bin/roborev`).
4. Do not `git commit` or `git push` unless explicitly told; leave the
   working tree dirty for review.
