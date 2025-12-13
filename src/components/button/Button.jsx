 
 import './Button.css'
 
export function Button ({children, className="", variant="secondary", loading= false , size, ...props} ){
 
 
    return(
      <button className={`primary__btn ${className} btn-${variant} btn-${size}`} 
       {...props}>
        {loading ? 'please wait' : children}
 
     </button>
    )
}
 