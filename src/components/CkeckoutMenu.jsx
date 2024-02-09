import { Link } from "react-router-dom"
import { useContext } from "react"
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../Context/context'
import OrderCard from "./OrderCard"
import { totalPriceProducts } from '../utilities/totalPrice'
import '../styles/CkeckoutMenu.css'


function CkeckoutMenu () {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filterProducts = context.carProducts.filter(product => product.id != id)
        context.setCarProducts(filterProducts)        
    }
    const handleCheckout = () => {
        const orderToAdd = {            
            date: '01.02.2024',
            products: context.carProducts,
            totalProductos: context.carProducts.length,
            totalPrice: totalPriceProducts(context.carProducts)
        }
        context.setOrder([...context.order,orderToAdd])
        context.setCarProducts([])
        context.setSearchByTitle(null)
    }
    
    return(
        <aside 
            className={`${context.isCheckoutMenuOpen ? 'flex' : 'hidden' } checkout-menu flex-col fixed right-4 border-2 border-green-900 rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon 
                        className="h-6 w-6 text-red-900 cursor-pointer"
                        onClick={() => context.closeCheckoutMenu()}>
                    </XCircleIcon>                    
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
            {
                context.carProducts.map(product => {
                    return (
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.images}
                        price={product.price} 
                        handleDelete={handleDelete}
                    />
                    )                   
                })
            }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center my-2">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">${totalPriceProducts(context.carProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckout()}>CheckOut</button>
                </Link>
            </div>            
        </aside>
    )
}
export default CkeckoutMenu