import { buildNotification } from "./view-notification.js";

export function controllerNotification(element){
    function showNotification(message){
        const notification = document.createElement('div');
        notification.innerHTML= buildNotification(message)
        element.appendChild(notification);
    }
    return {
        showNotification
    }
};