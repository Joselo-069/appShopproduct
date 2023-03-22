import { useState } from "react"

const initialState = {
	cart: [],
}


function useInitialState() {
    const [state, setState] = useState(initialState)

     const addToCart = (payload) => {
        setState({
            ...state,
            cart:[...state.cart,payload]
        })  
    }

    const removeToCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((_, index) => index !== payload)
        })
    }

    return {
        state,
        addToCart,
        removeToCart
    }
}

export default useInitialState