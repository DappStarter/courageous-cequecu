require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant gloom clog front slice'; 
let testAccounts = [
"0xb514970729b1b174cd5f23d1e1e9732c3357efa40eb8a3969fcba50a5fbfd801",
"0xfe43b461bcd72956613772d137a2eda061b4f0b24df0ccaf20393c6af4410b06",
"0x903eecd3d91f3e3ecdad7882fb2969759f561882ec1a0c26e63013fa2ebb5565",
"0x33a14796cbbba423cfe5fdbf38a1f6bda9cb7ed7c9a5fa81ba2e5841a88b4b3f",
"0x273c5c95d87bf3899eef3d81af525533db05b730ee91190ae2632a0e3da3523c",
"0x5f6b7b2211f409ad4a2589a81143fceefa782efb206e63157dd7e03b2c0adb36",
"0xabd93a88690d511e098d01012bdab7103d2b2426b5c5b8ef5424c323aed04da2",
"0xa4af42f3ffd2ea807d8276ed5c938a512987843f5bac6186ca6be6ffc6acf1fe",
"0xc0f0b30630791c9fdb7da1723d6cc49bc1ccc525e3352d70c9cdd8c70c5c929d",
"0x49dc02fe929432583a4a5f97d2c72de3b5cf204fb6c5c3a90f30fdc34b11e077"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

