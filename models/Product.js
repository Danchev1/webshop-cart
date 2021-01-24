const fs = require('fs');
const path = require('path');
const { rootDir } = require('../utils/index');

const productsStorage = path.join(rootDir(), 'data', 'products.json');

module.exports = class Product {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    static fetchProducts(callB) {
        fs.readFile(productsStorage, (error, fileContent) => {
            if (error) {
                callB([]);
            } else {
                callB(JSON.parse(fileContent));
            }
        });
    }

    save() {
        fs.readFile(productsStorage, (error, fileContent) => {
            let products = [];
            !error && (products = JSON.parse(fileContent));
            products.push(this);
            fs.writeFile(productsStorage, JSON.stringify(products), (error) => {
                console.log(error);
            });
        });
    }
};
