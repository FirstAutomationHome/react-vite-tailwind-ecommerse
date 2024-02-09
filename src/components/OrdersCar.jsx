import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

function OrdersCar({ totalPrice, totalProducts }) {

    


    return(
        <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span>01.02.2023</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>                
                <p className='flex items-center gap-2'>
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronDoubleRightIcon className='h-6 w-6 text-black cursor-pointer mt-1' />
                </p>
            </div>          
           
        </div>
    )
}
export default OrdersCar