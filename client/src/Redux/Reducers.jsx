const initialstate = {
    cart: []
}
const Reducers = (state = initialstate, action) => {

    switch (action.type) {

        case "Add_to_cart":
            let cartindex = state.cart.findIndex((item) => item.id == action.payload.id && item.gender === action.payload.gender)
            if (cartindex >= 0) {
                state.cart[cartindex].quantity += 1
            }
            else {
                let data = { ...action.payload, quantity: 1 }
                return {
                    ...state,
                    cart: [...state.cart, data]
                }
            }


            case "Remove_from_cart":
                let data = state.cart.filter((val) => val.id != action.payload)
                return {
                    ...state,
                    cart: data
                }




            case "DescQuantity": 

            let descquanindex = state.cart.findIndex((item) => item.id === action.payload.id  && item.gender === action.payload.gender)

            if(state.cart[descquanindex].quantity >= 1){
                state.cart[descquanindex].quantity -= 1
                return{
                    ...state,
                    cart: [...state.cart]
                }

            }else if(state.cart[descquanindex].quantity === 1){
                let data = state.cart.filter((val) => val.id != action.payload)
                return {
                    ...state,
                    cart: data
                }


            }


            case "Clear_cart":
                // Clear cart logic
                return {
                  ...state,
                  cartItems: []
                };


         


            


      



        default:
            return state;
    }

}
export default Reducers