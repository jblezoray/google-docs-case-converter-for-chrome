const SHORTCUTS = { KeyU: (t) => t.toUpperCase(), KeyL: (t) => t.toLowerCase() };

async function handleKeydown(e) {
  const transform = SHORTCUTS[e.code];
  if (!e.ctrlKey || !e.shiftKey || !transform) return;
  e.preventDefault();
  e.stopPropagation();

  const doc = e.currentTarget;
  const original = await navigator.clipboard.readText();
  const sentinel = "\x00__sel__\x00";
  await navigator.clipboard.writeText(sentinel);
  if (!doc.execCommand("copy")) { await navigator.clipboard.writeText(original); return; }
  const text = await navigator.clipboard.readText();
  await navigator.clipboard.writeText(original);
  if (text === sentinel || !text) return;

  const dt = new DataTransfer();
  dt.setData("text/plain", transform(text));
  (doc.activeElement || doc.body).dispatchEvent(
    new ClipboardEvent("paste", { bubbles: true, cancelable: true, clipboardData: dt })
  );
  console.log("[MAJ]", e.code, JSON.stringify(text), "→", JSON.stringify(transform(text)));
}

function attachToIframe(iframe) {
  const attach = () => { try { iframe.contentDocument?.addEventListener("keydown", handleKeydown, true); } catch {} };
  attach();
  iframe.addEventListener("load", attach);
}

document.addEventListener("keydown", handleKeydown, true);
document.querySelectorAll("iframe").forEach(attachToIframe);
new MutationObserver((mutations) => {
  for (const { addedNodes } of mutations)
    for (const node of addedNodes)
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === "IFRAME") attachToIframe(node);
        node.querySelectorAll?.("iframe").forEach(attachToIframe);
      }
}).observe(document.documentElement, { childList: true, subtree: true });
