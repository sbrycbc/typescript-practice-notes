/* let message: string = 'Hello, hello  World!!!!';


const h1=document.createElement('h1')
h1.textContent=message
document.body.appendChild(h1) */

/* const reservedText = (text:string) => {
    
    return text.split('').reverse().join('')}

    console.log(
        reservedText(15)) */


interface Product {
    id:number,
    name:string,
    price:number
}

function getProduct(id):Product {
    return {
        id,
        name:'product #' + id,
        price:55,
       
    }
} 

function showProduct(name, price) {
    return `product = ${name} und price = ${price}!`
}

const product = getProduct(1)

console.log(product);

product
