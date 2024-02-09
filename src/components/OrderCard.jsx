import { XCircleIcon } from '@heroicons/react/24/solid'

function OrderCard({ id, title, image, price, handleDelete }) {

    let renderXCircleIcon
    if(handleDelete) {
        renderXCircleIcon = <XCircleIcon className="h-6 w-6 text-green-700 cursor-pointer" onClick={() => handleDelete(id)}></XCircleIcon>
    }

    return(
        <div className="flex justify-between items-center mb-2">
            <div className='flex items-center gap-2'>
                <figure className='w-14 h-14'>
                    <img 
                        className='w-full h-full rounded-lg object-cover'
                        src={image} 
                        alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                {renderXCircleIcon}                  
            </div>
        </div>
    )
}
export default OrderCard