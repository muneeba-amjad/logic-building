const cart =["shoes", "pants","shirts"]

// createOrder,
// proceedToPayment,
// showOrderSummary,
// updateWallet
const myPromise = new Promise(function(resolve, reject){
    resolve()
    reject() 
    // these cases are once

})
// promise chaining
createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId
})
.then(function(){
    return proceedToPayment(orderId)
})
.then(function(){
     console.log(message, 'of amount:', amount);
    return showOrderSummary(message, amount)
})
.then(function({message,amount}){
 console.log('Your wallet has beed debited by:', amount);
})
.catch(function(err){
    console.error(err)
})
.then(function() {
    console.log('No matter what happens, I will get executed');
  })

function createOrder(cart){
    const myPromise = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
        }
        const orderId=`12345`
        setTimeout(() => {
            resolve(orderId)
        }, 5000);
    }) 
    return myPromise
}
function proceedToPayment(orderId){
 return new Promise (function(resolve,reject){
    resolve({message:`Payment Successful for ${orderId}`, amount: 2500 })
 })
}
function showOrderSummary(amount){
    return new Promise(function(resolve, reject){
        if (amount > 2000){
            resolve ({message: `you have order items that cost ${amount} Rs`})
        }else{
            reject(new Error("Please buy more to get discount"))
        }
    })
}

function validateCart(){
    return true
    // return false 
}