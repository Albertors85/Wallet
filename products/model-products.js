// conectar con la base de datos
// almacenar la informacion
// tratar la informacion almacenada si fuera necesario


export async function getProducts(){
    const url = 'http://localhost:8000/api/products'
    let products = [];

    try{
        const response = await fetch(url);
        const data = await response.json();
        products= parseProducts(data)
    }catch(error){
        throw new Error("No se han podido cargar los anuncios. Pruebe mas tarde")
    }
    return products
};

function parseProducts(data){
    return data.map(data=>({
        name: data.name,
        info: data.info,
        price: data.price,
        situation: data.situation,
        user: data.user
    }))
}