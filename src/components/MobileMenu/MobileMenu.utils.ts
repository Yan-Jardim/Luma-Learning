export function focusLinkTarget(href: string) {
  const target = href.startsWith("#") ? document.getElementById(href.slice(1)) : null;
  if (!target) return false;
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus();
  return true;
}
