 
 import './Button.css'
 
export function Button ({children, className="", variant="secondary", loading= false , size, ...props} ){
 
 
    return(
      <button className={`primary__btn ${className} btn-${variant} btn-${size}`} 
       {...props}>
        {loading ? 'please wait' : children}
 
     </button>
    )
}
 

// import {Button} from "./Button.jsx"
// import {Notification} from "./Notification.jsx"
// import { OnlineStatus } from "./OnlineStatus.jsx"
// import { useState  } from "react"
 
// function App() {
//   const array = useState(true)
//   const value = array[0]
//   const updateFunction = array[1]
 
//   return (
// <>
// <h3>My name is Emmanuel</h3>
// <Button title="Check Online status" 
//     onClick={()=> {
//       updateFunction(value ? false : true)
//     }} 
//     />

 
      
 
//       <OnlineStatus isOnline={value} />
 
 
//     {value ? <Notification title="New Message" description="You have 40 unread messages from Karen" /> : <span>No messages</span>}
// </>
//   )
// }
 
// export default App



// another version 

// import React, { forwardRef } from "react";
 
// /** small helper for className composition */
// function cx(...args) {
//   return args.filter(Boolean).join(" ");
// }
 
// /**
// * Production-ready React Button (JSX)
// * - forwards ref
// * - supports polymorphic 'as' (button, a, custom)
// * - accessible: aria-disabled + disabled when needed
// */
// const Button = forwardRef(function Button(
//   {
//     as,
//     variant = "primary",
//     size = "md",
//     loading = false,
//     disabled = false,
//     fullWidth = false,
//     leftIcon = null,
//     rightIcon = null,
//     children,
//     className,
//     href,
//     type = "button",
//     onClick,
//     ...rest
//   },
//   ref
// ) {
//   const isDisabled = disabled || loading;
//   // Decide element to render
//   const computedAs = as || (href ? "a" : "button");
//   const isButton = computedAs === "button";
 
//   const classes = cx(
//     "btn",
//     `btn--${variant}`,
//     `btn--${size}`,
//     fullWidth && "btn--full",
//     isDisabled && "btn--disabled",
//     leftIcon && "btn--has-left-icon",
//     rightIcon && "btn--has-right-icon",
//     className
//   );
 
//   // If rendering an anchor but disabled, prevent navigation and make it un-focusable
//   const anchorProps =
//     computedAs === "a" && isDisabled
//       ? { "aria-disabled": true, onClick: (e) => e.preventDefault(), tabIndex: -1, href: href || "#" }
//       : computedAs === "a"
//       ? { href }
//       : {};
 
//   const buttonProps = isButton
//     ? { type, disabled: isDisabled, "aria-disabled": isDisabled }
//     : { role: "button", "aria-disabled": isDisabled };
 
//   function handleClick(e) {
//     if (isDisabled) {
//       e.preventDefault();
//       return;
//     }
//     if (onClick) onClick(e);
//   }
 
//   const Content = (
//     <>
//       {loading && (
//         <span className="btn__spinner" aria-hidden="true" />
//       )}
//       {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
//       <span className="btn__content">{children}</span>
//       {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
//     </>
//   );
 
//   const Element = computedAs;
 
//   return (
//     <Element
//       {...buttonProps}
//       {...anchorProps}
//       {...rest}
//       ref={ref}
//       className={classes}
//       onClick={handleClick}
//     >
//       {Content}
//     </Element>
//   );
// });
 
// export default Button;