const chainMaker = {
  getLength() {
    if (!this.chain) {
      return 0;
    } else {
      return this.chain.length;
    }
  },
  addLink(value) {
    this.chain = this.chain || [];
    if (value === undefined) {
      this.chain.push('');
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    this.chain = this.chain || [];
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw Error();
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain = this.chain || [];
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map(function (element) {
      return '( ' + element + ' )';
    }).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
