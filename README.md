# Google Docs Case Converter

Chrome extension that converts selected text to uppercase or lowercase in Google Docs using keyboard shortcuts.

## Shortcuts

| Shortcut | Effect |
|---|---|
| `Ctrl + Shift + U` | UPPERCASE |
| `Ctrl + Shift + L` | lowercase |

## Installation

> No Web Store listing. Install manually as an unpacked extension.

1. [Download the latest release](../../releases/latest) and unzip it.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the unzipped folder.
5. Open any Google Docs document and start using the shortcuts.

To update, download the new release, replace the folder contents, and click the refresh icon on `chrome://extensions`.

## Limitations

- **Google Docs only** — does not work in Google Sheets, Slides, or any other website.
- **Selection is not preserved** after conversion — the cursor is placed at the end of the replaced text.
- **Clipboard is temporarily overwritten** during the operation, then restored. Rapid successive uses may cause a race condition.
- **`Ctrl+Shift+U` conflicts with Linux** — on Linux, this shortcut opens a Unicode input dialog in many apps. Consider remapping the shortcut in `content.js` if you are on Linux.
- **Rich formatting is stripped** — the extension works with plain text. Inline bold, italic, links, etc. within the selection will be lost after conversion.
