
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider);



export async function TransferEth (address, amount) {
    await ethereum.enable()
    const myAddress =  (await web3.eth.getAccounts())[0]
    web3.eth.sendTransaction({
    from: myAddress,
    to: address,
    value: Web3.utils.toWei(amount, 'ether')
  })
  .then(function(receipt){
    console.log(receipt)
  });
}

//let transaction = watcher.getTransaction('0x7f0c3b5502f559cdb52adbf4c6ec11a138c507d37635d2e2c7e293cd67fd07cb')
