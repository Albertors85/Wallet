import { getProducts } from "./model-products.js";
import { buildProducts } from "./view-products.js";
import { trigerEvent } from "../tool/trigger.js";

export async function controllerProducts(element){
    try{
        const products = await getProducts();

        if(products.length===0){
            voidListProducts(element)
        }else{
            renderListProducts(products,element)
        }

    }catch(errorMessage){
      alert('errororororororor')
      trigerEvent('errorLoader',{
        message: errorMessage
    },element)
    }
};

function voidListProducts(element){
    element.innerHTML= `<h2> Lo sentimos, por el momento no hay anuncios disponibles. Agrega el tuyo rápido</h2>`
};

function renderListProducts(products,element){
    products.forEach(product => {
        const productElement= document.createElement('div');
        productElement.innerHTML= buildProducts(product);
        element.appendChild(productElement);
        
    });
}