import { images } from "@/constants"
import React from 'react'
import { Image, TouchableOpacity } from "react-native"

const CartButton =() =>{
    return(
        <TouchableOpacity className="cart-btn">
            <Image source={images.bag} className="size-5" resizeMode="contain">
                
            </Image>
        </TouchableOpacity>
    )
}

export default CartButton