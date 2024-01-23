/* let message: string = 'Hello, hello  World!!!!';


const h1=document.createElement('h1')
h1.textContent=message
document.body.appendChild(h1) */

/* const reservedText = (text:string) => {
    
    return text.split('').reverse().join('')}

    console.log(
        reservedText(15)) */

/* 
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

product */



let fullName: string = 'Sabriye';
let age: number = 25;
let active: boolean = true;

const names: string[] = ['ali','veli', 'gölge', ]

let user : {
    name: string;
    surname: string;
    age: number;
}

user = {
    name: 'Sbry',
    surname: 'cbc',
    age:25
}

let multiplay: ( x:number, y:number)=> number

multiplay = (x,y)=> x*y

console.log(multiplay(4,5));
