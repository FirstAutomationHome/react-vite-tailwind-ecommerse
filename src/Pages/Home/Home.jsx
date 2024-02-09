import { useContext } from "react"
import { ShoppingCartContext } from '../../Context/context'
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"

function Home() {

    const context = useContext(ShoppingCartContext)
    const renderView = () => {
        
        if(context.filteredItems?.length > 0) {
                return (
                    context.filteredItems?.map((item) => (
                        <Card 
                            key={item.id} 
                            category={item.category.name} 
                            image={item.images[0]}
                            title={item.title}
                            price={item.price}
                            listComplete={item}                       
                        />
                    ))                
                )
            } else {
                return (
                    <div>We {`don't`} have anything 😕</div>
                )
            }            
        } 
    

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>                
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input 
                type="text"
                placeholder="Search a product"
                className="rounded-lg border border-white h-10 w-80 p-4 mb-4 focus:outline-none"
                onChange={(event) => context.setSearchByTitle(event.target.value)} />
            <div className="grid gap-1 grid-cols-4 w-max max-w-screen-lg">
                {renderView()}
            </div>
            <ProductDetail />            
        </Layout>
    )
}
export default Home