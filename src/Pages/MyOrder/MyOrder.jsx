import { useContext } from "react"
import { ShoppingCartContext } from '../../Context/context'
import { Link } from "react-router-dom"
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import OrderCard from "../../components/OrderCard"
import Layout from "../../components/Layout"

function MyOrder () {

    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let indexOrder = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(indexOrder === 'last') indexOrder = context.order?.length - 1
    
    
    
    return (
        <Layout>
             <div className='flex items-center justify-center relative w-80 mb-6'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronDoubleLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col w-80 mt-6">
            {
                context.order?.[indexOrder]?.products?.map(product => {                   
                    return (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.images}
                        price={product.price}                         
                    />
                    )                   
                })
            }
            </div>
        </Layout>
    )
}
export default MyOrder