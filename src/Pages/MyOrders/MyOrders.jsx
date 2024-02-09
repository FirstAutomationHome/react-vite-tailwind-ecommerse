import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/context'
import { Link } from "react-router-dom"
import OrdersCar from '../../components/OrdersCar'
import Layout from "../../components/Layout"

function MyOrders() {

    const context = useContext(ShoppingCartContext)
    
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>                
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>
           
           {
            context.order.map((order, index) => {
                return(
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCar  
                            totalPrice={order.totalPrice} 
                            totalProducts={order.totalProducts}/>
                    </Link>
                )                             
            })
           }           
        </Layout>
        
    )
}
export default MyOrders