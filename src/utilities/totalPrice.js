// -- Función con forEach
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}

/**
 * Función que contiene el total del precio de los productos agregados en el carro de compras
 * -- Función con el método 
 * @param {Array} products // carProducts: Array of Objects
 * @returns {number} Total price
 */

export const totalPriceProducts = (products) => {
    return products.reduce((sum,product) => sum += product.price, 0)
}