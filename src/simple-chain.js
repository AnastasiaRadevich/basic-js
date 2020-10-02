const CustomError = require("../extensions/custom-error");

let chainMaker = {
    chain: [],

    getLength() {

        return this.chain.length;
    },
    addLink(value) {

        this.value = value

        const link = `( ${value} )`;

        this.chain.push(link);

        return this;

    },

    removeLink(position) {

        this.position = position;
        if (position > 0 && position <= this.chain.length) {
            this.chain.splice(position - 1, 1)
        } else {
            this.chain = [];
            throw new Error;
        }
        return this

    },
    reverseChain() {
        this.chain = this.chain.reverse();
        return this;

    },
    finishChain() {
        let finishChain = this.chain.join('~~');
        this.chain = [];
        return finishChain;

    }
};

module.exports = chainMaker;
