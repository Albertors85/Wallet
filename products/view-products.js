// estrctura que debemos agregar al html

export function buildProducts(product){
    return `
    <h1>${product.name}</h1>
    <p>${product.info}</p>
    <p>${product.price}</p>
    <p>${product.situation}</p>
    <p>${product.user}</p>
    `
}