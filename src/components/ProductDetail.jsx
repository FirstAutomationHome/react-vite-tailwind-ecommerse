import { useContext } from "react"
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../Context/context'
import '../styles/ProductDetail.css'

function ProductDetail() {
    const context = useContext(ShoppingCartContext)
    // console.log('PRODUCT TO SHOW: ', context.productToShow)

    return(
        <aside 
            className={`${context.isProductOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-4 border-2 border-green-900 rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XCircleIcon 
                        className="h-6 w-6 text-red-900 cursor-pointer"
                        onClick={() => context.closeProductDetail()}>
                    </XCircleIcon>                    
                </div>
            </div>
            <figure className="px-6 flex justify-center">
                <img 
                    className="w-28 h-28 rounded-lg" 
                    src={context.productToShow.images} 
                    alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-1xl">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>
        </aside>
    )
}
export default ProductDetail