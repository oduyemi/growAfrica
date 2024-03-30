import clsx from "clsx";

function getClassName({className}){
    return clsx("mt-10 bg-[#01562A] text-white rounded-md px-3 py-2 hover:bg-gray-400 hover:text-black transition-colors transition-duration-300 cursor-pointer focus-outline-none focus-ring-2 focus-ring-opacity-50",
    className)
}

const sizes = {
    small: "px-4 py-3",
    medium: "px-6 py-4",
    large: "w-full px-4 py-3"
};

const variants = {
    colour: "bg-colour focus:ring-wht",
    outline: "bg-whyte focus:ring-dk",
    whi: "bg-whi focus:ring-yel",
};


const Button = ({children,
    className,
    size,
    variant,
    ...rest
}) => {
    return(
    <button className= {clsx(
        sizes[size],
        variants[variant],
        getClassName({className})
    )}
    {...rest}
        >
        {children}
        </button>


    )
    
    
};


export default Button;