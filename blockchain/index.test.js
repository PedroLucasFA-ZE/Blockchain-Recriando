const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
    
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain;
        bc2 = new Blockchain;
    });

    it('starts with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {

        const data = '0';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);

    });

    it('validade a valid chain', () => {
        
        bc2.addBlock('U$5000');
        expect(bc2.isValidChain(bc.chain)).toBe(true);

    });

    it('invalidates a chain with a corrupt genisis block', () => {

        bc2.chain[0].data = '0U$';
        expect(bc.isValidChain(bc2.chain)).toBe(false);

    });

    it('invalidade a corrupt chain', () => {

        bc2.addBlock('200U$');
        bc2.chain[1].data = '0U$';
        expect(bc.isValidChain(bc2.chain)).toBe(false);

    });

    it('Replaces the chain with a valid chain', () => {

        bc2.addBlock('0U$')
        bc.replaceChain(bc2.chain)
        expect(bc.chain) !== (bc2.chain);

    });
    
    it('does not replace the chain with one of less or equal length', () => {
        
        bc.addBlock('0U$');
        bc.replaceChain(bc2.chain);
        expect(bc.chain) <= (bc2.chain);

    });
});