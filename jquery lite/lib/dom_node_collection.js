class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(strArg) {
    if (typeof strArg === "string") {
      this.forEach( node => (node.innerHTML = strArg));
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append() {
    
  }
}
