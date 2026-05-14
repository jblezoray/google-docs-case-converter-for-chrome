# Google Docs Case Converter

Chrome extension that converts selected text to uppercase or lowercase in Google Docs using keyboard shortcuts.

## Shortcuts

| Shortcut | Effect |
|---|---|
| `Ctrl + Shift + U` | UPPERCASE |
| `Ctrl + Shift + L` | lowercase |

## Installation

### Chrome

> No Web Store listing. Install manually as an unpacked extension.

1. [Download the latest release](../../releases/latest) — get the `google-docs-case-converter-*.zip` file — and unzip it.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the unzipped folder.
5. Open any Google Docs document and start using the shortcuts.

To update, download the new release, replace the folder contents, and click the refresh icon on `chrome://extensions`.

### Safari (macOS only)

> Requires macOS. The extension is unsigned, so Developer mode must be enabled in Safari.

1. [Download the latest release](../../releases/latest) — get the `majuscules-docs-safari-*.zip` file — and unzip it.
2. Open `MajusculesDocs.app`. It will prompt you to open Safari Extensions preferences — do so. Alternatively, open it manually: **Safari → Settings → Extensions**.
3. Enable **MajusculesDocs** in the extensions list.
4. If Safari refuses to load unsigned extensions, enable Developer mode first:
   - **Safari → Settings → Advanced** → check **Show features for web developers**.
   - **Develop** menu → **Allow Unsigned Extensions** (must be re-enabled after each Safari restart).
5. Open any Google Docs document and start using the shortcuts.

## Limitations

- **Google Docs only** — does not work in Google Sheets, Slides, or any other website.
- **Selection is not preserved** after conversion — the cursor is placed at the end of the replaced text.
- **Clipboard is temporarily overwritten** during the operation, then restored. Rapid successive uses may cause a race condition.
- **`Ctrl+Shift+U` conflicts with Linux** — on Linux, this shortcut opens a Unicode input dialog in many apps. Consider remapping the shortcut in `content.js` if you are on Linux.
- **Rich formatting is stripped** — the extension works with plain text. Inline bold, italic, links, etc. within the selection will be lost after conversion.
