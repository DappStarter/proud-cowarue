require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign stomach response talk comic install civil army gather'; 
let testAccounts = [
"0x0df3ef183a70fb468a1a13c39bb580d17eb19a723474b85da06319863a9579a0",
"0xc6918df5ed62d8a4bf710c9c053650ed67f42b87385c56d05ffa02244c3dc8a8",
"0xfd730c91374c32bfe836652b6076187eb9b377b52971849f7c240649302b7767",
"0x4bede0c61b965598b0d4a08d9c62d835d132decfcf5116910e97db70a06cefbb",
"0x2060d996e5cb6eb6ece66c73d94d1c72bab6280a7928867523451aac4384354b",
"0x8fb08c1c7c3945eae2418d7dc8794eb2c2dff67791bec5a0a46db5451c9fe476",
"0x0ff3a1a4d8f5b9f40e0bdbcff27959ce29c0519b755a1f28a3125f7e8cef69fe",
"0x86a32a63611cf458eb50ebb739ee18b526878aa61f65b377845af0206dc670fa",
"0x7610b56160ad3d4eb623c868d0385747acdc6304e863ce6ae322a47553c3de09",
"0x2c796ddc923daabe22d3a74c939d7c34400ec6d8604aa4e94c3975d647e1f207"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
