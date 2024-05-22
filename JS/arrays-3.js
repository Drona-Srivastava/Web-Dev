//for a given array all items have an offer of 10% OFF change the array to store final price
let price = [250, 645, 300, 900, 50];
for(let i=0 ; i<price.length; i++){
    price[i] = price[i] - (10*price[i])/100;
    let value = `The discount price is ${price[i]}`;
    console.log(value);
}