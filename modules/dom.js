// modules/dom.js

export function createElementAndAdd(tag, props = {}, container = null) {
  const el = document.createElement(tag);
  for (const key in props) el[key] = props[key];
  if (container) container.appendChild(el);
  return el;
}

export function getElements(selectors = []) {
  return selectors.map(s => document.querySelector(s));
}
