//Orquestador

import { controllerProducts } from "./products/controller-products.js";
import { controllerNotification } from "./notification/controller-notification.js";
// esperamos a que se cargue el html

document.addEventListener('DOMContentLoaded',()=>{
    const productsList = document.querySelector('.productsList');
    const notification = document.querySelector('.notificationList');
    const {showNotification}=controllerNotification(notification)
    
    productsList.addEventListener('errorLoader',(event)=>{
        showNotification(event.detail.message)
        event.stopPropagation();
    })
    controllerProducts(productsList);
})