// eslint-disable-next-line react/prop-types
function Layout ({ children }) {
    return(
        <div className="flex flex-col items-start mt-20 ml-3">
            {children}            
        </div>
    )
}
export default Layout