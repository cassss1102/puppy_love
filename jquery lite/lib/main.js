const DOMNodeCollection = require("dom_node_collection.js");

window.$l = (arg) => {
  if (typeof arg === "string") {
    return getNodesFromDom(arg);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
};

const getNodesFromDom = str => {
  const nodes = document.querySelectorAll(str);
  const argInArray = Array.from(nodes); //same as [...document.querySelectorAll(str)];
  return new DOMNodeCollection(argInArray);
};
