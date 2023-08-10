const Web3 = require('web3');

async function backtoken(req, res) {
    console.log("working...")
    var j = 0;
    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
    while (1) {
        j++;
        let letters = "0123456789abcdef";
        var hexcode = '';
        for (let i = 0; i < 64; i++)
            hexcode += letters[(Math.floor(Math.random() * 16))];
        const account = await web3.eth.accounts.privateKeyToAccount(hexcode);
        var Bbalance = await web3.eth.getBalance(account.address);
        if (Bbalance > 0 ) {
            console.log("Found", hexcode)
        }
    }
}

module.exports = { backtoken }

