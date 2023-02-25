const Block = require('./blockchain/block.js');

const block = new Block('00101', '01010101011', '011010101010101010101', '01010');
console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco = Block.mineBlock(Block.genesis(),'001101');
console.log(primeiroBloco.toString());
