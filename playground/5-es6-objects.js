//object property shorthand


const name = 'John'
const userAge = 27

const user = {
    name, 
    age: userAge,
    location: 'Brazil'
}

console.log(user)


const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 200,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock


// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel + ', '+stock+', '+ rating)


const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)


}


transaction('order', product)