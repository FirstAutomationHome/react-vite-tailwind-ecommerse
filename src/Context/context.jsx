import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    //Shopping car - Incremen or count
    const [count, setCount] = useState(0)
    //Product detail - Open/close
    const [isProductOpen,setIsProductOpen] = useState(false)
    const openProductDetail = () => setIsProductOpen(true)
    const closeProductDetail = () => setIsProductOpen(false)
    //Product detail - Show product
    const [productToShow,setProductToShow] = useState({})
    //Shoping car - Add products to car
    const [carProducts, setCarProducts] = useState([])
    //Checkout Side Menu - Open/close
    const [isCheckoutMenuOpen,setIsCheckoutMenuOpen] = useState(false)
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true)
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false)
    //Shoppin car - order
    const [order, setOrder] = useState([])
    //Get Products
    const [items,setItems] = useState(null)
    
    const [filteredItems,setFilteredItems] = useState(null)
    // Get productos By title
    const [searchByTitle,setSearchByTitle] = useState(null)
    //Get products By category
    const [searchByCategory,setSearchByCategory] = useState(null)
    

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    const filterItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filterItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))

    }

    const filterBy = (searchType) => {
        if (searchType === 'BY_TITLE') {
            return filterItemsByTitle(items,searchByTitle)            
        }
        if (searchType === 'BY_CATEGORY') {
            return filterItemsByCategory(items,searchByCategory)           
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filterItemsByCategory(items,searchByCategory).filter(item =>  item.title.toLowerCase().includes(searchByTitle.toLowerCase()))         
        }
        if (!searchType) {
            return items        
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))        
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))        
        if(searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))        
        if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null,items,searchByTitle,searchByCategory))        
    },[items,searchByTitle,searchByCategory])

    // Podmeos ver los items filtrados
    //console.log('filteredItems: ',filteredItems)
    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductOpen,
            productToShow,
            setProductToShow,
            carProducts,
            setCarProducts,
            isCheckoutMenuOpen,
            openCheckoutMenu,
            closeCheckoutMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>        
    )
}