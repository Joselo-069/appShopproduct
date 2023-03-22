import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"

function useGetProducts(API) {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const getProducts = async() => {
        const response = await axios(API)
        setProducts(response.data)
      }

      getProducts()
    }, [])

    return products
}

export default useGetProducts