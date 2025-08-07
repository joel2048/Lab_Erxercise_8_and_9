const products = require('../models/products');

const loadProducts = (products) => {
            document.querySelector('#product-list').innerHTML = '';

            products.forEach(product => {
                let categorySlug = product.category.replaceAll(' ', '_').replaceAll("'", '');
                categories.set(product.category, categorySlug);

                addProduct(product);
            });

            if (products.length == 0) document.querySelector('#product-list').innerHTML = '<p>No matching products.</p>';
}


module.exports = {
  addNumbers,
  subNumbers,
  divNumbers,
  multiNumbers,
};
