const productItems = [
    {
        name: 'Product 1',
        price: 100000,
        image: './image/product-1.png',
        type: 'woman',
        description: 'This is a description of product 1'
    },
    {
        name: 'Product 2',
        price: 200000,
        image: './image/product-2.png',
        type: 'woman',
        description: 'This is a description of product 2'
    },
    {
        name: 'Product 3',
        price: 300000,
        image: './image/product-3.png',
        type: 'woman',
        description: 'This is a description of product 3'
    },
    {
        name: 'Product 4',
        price: 100000,
        image: './image/product-4.png',
        type: 'men',
        description: 'This is a description of product 4'
    },
    {
        name: 'Product 5',
        price: 200000,
        image: './image/product-5.png',
        type: 'men',
        description: 'This is a description of product 5'
    },
    {
        name: 'Product 6',
        price: 300000,
        image: './image/product-6.png',
        type: 'men',
        description: 'This is a description of product 6'
    }
]

const selectedItem = [];
function createWomanProduct(productList)
{
 
    const RowElem = document.getElementById('woman-row');
    // remove old 
    while(RowElem.hasChildNodes())
        {
            RowElem.removeChild(RowElem.firstChild);
        }

    const womanItems =productList.filter(x => x.type === 'woman');
    womanItems.forEach(womanProduct => {


        const ColElem = document.createElement('div');
        ColElem.classList.add('col-4');
        RowElem.appendChild(ColElem);

        ColElem.appendChild(creatProduct(womanProduct));
    });
    return RowElem;
}

function createMenProduct(productList)
{
    // const RowElem = document.createElement('div');
    // RowElem.classList.add('row');
    // const men = document.createElement('h5');
    // men.innerHTML = 'MEN PRODUCTS';
    // rightColumnEles.appendChild(men);

    const RowElem = document.getElementById('men-row');
    // remove old 
    while(RowElem.hasChildNodes())
        {
            RowElem.removeChild(RowElem.firstChild);
        }


    const menItems = productList.filter(x => x.type === 'men');
    menItems.forEach(menProduct => {

        const ColElem = document.createElement('div');
        ColElem.classList.add('col-4');
        RowElem.appendChild(ColElem);

        ColElem.appendChild(creatProduct(menProduct));
    });
    return RowElem;
}

function creatProduct(product)
{
    // const woman = productItems.filter((x) => x.type == 'woman');

    const productItemEle = document.createElement('div');
    productItemEle.classList.add('card-product');
    // create product image
    const productImageEle = document.createElement('img');
    productImageEle.setAttribute('src', product.image);
    productImageEle.classList.add('img-product'); // Set path img 
    productItemEle.appendChild(productImageEle);  // add in product
    // create product title
    const productTitleEle = document.createElement('h5');
    productTitleEle.innerHTML = product.name;
    productTitleEle.classList.add('name-product');
    productItemEle.appendChild(productTitleEle); 
    // create product decsription
    const productDescriptionEle = document.createElement('small');
    productDescriptionEle.innerHTML = product.description;
    productDescriptionEle.classList.add('decsription-product');
    productItemEle.appendChild(productDescriptionEle); 
    // create product price
    const productPriceEle = document.createElement('p');
    productPriceEle.innerHTML = `<strong>${product.price}</strong> VND`;
    productItemEle.appendChild(productPriceEle); 

    // create product button
    const productDButtonEle = document.createElement('button');
    productDButtonEle.innerHTML = "ADD TO CARD";
    productDButtonEle.setAttribute('type', 'button');
    productDButtonEle.setAttribute('id', 'addCart');
    productDButtonEle.addEventListener('click', () => updateCartBagde(product));
    productDButtonEle.className = 'btn btn-dark';
    productItemEle.appendChild(productDButtonEle);

    return productItemEle;
}

 //Get right column
const rightColumnEles = document.getElementById('right-column');
rightColumnEles.appendChild(createWomanProduct(productItems));
rightColumnEles.appendChild(createMenProduct(productItems));
// rightColumnEles.appendChild(createMenProduct());

// Get filter btn
const filterButton = document.getElementById('btn-filter');
filterButton.addEventListener('click',(e)=>{
    e.preventDefault();
    // Get min max value

    const minval = document.getElementById('min-price-txt').value;
    const maxval = document.getElementById('max-price-txt').value;

    const filteProuct = productItems.filter(product => {
        if (minval == "" && maxval == "")
        {
            return product;
        }
        else if(product.price >= minval && product.price <= maxval)
        {
            return product;
        }
    });
    console.log(filteProuct)

    createMenProduct(filteProuct);
    createWomanProduct(filteProuct);

});

function updateCartBagde(product)
{
    
    selectedItem.push(product);
    const addCart = document.getElementById('cart');
    addCart.innerHTML = selectedItem.length;
    
}
 
