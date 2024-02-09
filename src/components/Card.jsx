import { useContext } from "react"
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../Context/context'

const Card = ({ category, image, title, price, listComplete }) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetails) => {
        context.openProductDetail()
        context.setProductToShow(productDetails)
        context.closeCheckoutMenu()
    }

    const addProductsToCar = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        // ...agrega con setCarProducts lo que ya existe en carProducts pero adicional agrega lo que hay 
        // en productData
        context.setCarProducts([...context.carProducts, productData])
        context.openCheckoutMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCar = context.carProducts.filter(product => product.id === id).length > 0
        if(isInCar) {
            return(
            <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-green-500">
                <CheckCircleIcon className="h-6 w-6 text-blue-950"></CheckCircleIcon>
            </div>
            )
        } else {
            return(
            <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-green-500"
                onClick={(event) => addProductsToCar(event, listComplete)}>
                <PlusIcon className="h-6 w-6 text-green-950"></PlusIcon>
            </div>
            )            
        }        
    }

    return (
        <div 
            className="cursor-pointer w-44 h-64 rounded-lg ml-6 bg-custom-color"
            onClick={() => showProduct(listComplete)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
                <img className="w-full h-4/5 object-cover rounded-lg" src={image} alt="item.image"/>
                {renderIcon(listComplete.id)}                               
            </figure>
            <p className="flex justify-between px-2 pb-1 items-center">
                <span className="text-sm font-white text-black">{title}</span>
                <span className="text-lg font-medium">${price}</span>
            </p>
        </div>
    )
}
export default Card