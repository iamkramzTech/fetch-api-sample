getProduts();

async function getProduts() {
    const API_URL = "https://localhost:7113/api/products";
    const ul = document.getElementById('products');
    ul.style.listStyleType = "none";
    const list = document.createDocumentFragment();

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const products = await response.json();

      console.log(products);
      products.forEach((product)=>{
        let li = document.createElement('li');
        let productId = document.createElement('h2');
        let productName = document.createElement('h2');
        let price = document.createElement('span');

        productId.textContent = `Product ID: ${product.id}`;
        productName.textContent = `Product Name: ${product.name}`;
        price.textContent = `Price: $${product.price}`;

        li.appendChild(productId);
        li.appendChild(productName);
        li.appendChild(price);
        list.appendChild(li);
      })
      
      
      ul.appendChild(list);
      


    } catch (error) {
      console.error(error.message);
    }
  }


//console.log('hello w');
