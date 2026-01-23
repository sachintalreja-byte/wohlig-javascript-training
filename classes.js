class product {
    constructor(name, price){
       this.name = name;
       this.price = price; 
    }

    displayProduct(){
        console.log(`product:${this.name}`);
        console.log(`price:$${this.price}`);
    }
}

const product1 = new product("shirt",19.99);
const product2 = new product("pants",29.99);
const product3 = new product("hoodie",39.99);


product1. displayProduct();
product2. displayProduct();
product3. displayProduct();
