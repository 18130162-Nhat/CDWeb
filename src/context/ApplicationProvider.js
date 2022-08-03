import { createContext,  useState } from "react";
import localStorageApp from "../service/LocalStorage";
export const ApplicationContext = createContext()

function ApplicationProvider({ children }) {
   let init = localStorageApp.getItemStorage("user")
   let shopCart = localStorageApp.getItemStorage("cart")
   const [user, setUser] = useState(init)
   const [cart, setCart] = useState(shopCart === undefined ? [] : JSON.parse(shopCart))
   const logged = (object) => {
      setUser(object)
   }
   const setCartEmpty = () =>{
      setCart([])
   }
   const setUserEmpty = () =>{
      setUser(undefined)
   }
   
   const addItem = (item) => {
      let arrayCopy = [...cart]
      let pos = 0
      let product = arrayCopy.find((p, index) => {
         pos = index
         return p.idProduct === item.idProduct
      })
      if (product) {
         let object = { ...product, quantity: product.quantity + 1 }
         arrayCopy[pos] = object
         setCart(arrayCopy)
         localStorageApp.setItemStorage("cart", JSON.stringify(arrayCopy))
      }
      else {
         let object = { ...item, quantity: 1 }
         let arrayProduct = [...cart, object]
         setCart(arrayProduct)
         localStorageApp.setItemStorage("cart", JSON.stringify(arrayProduct))
      }
   }
   const addItemDetail = (item) =>{
      let arrayCopy = [...cart]
      let pos = 0
      let product = arrayCopy.find((p, index) => {
         pos = index
         return p.idProduct === item.idProduct
      })
      if(product){
         let object = {...product,quantity:product.quantity+item.quantity}
          arrayCopy[pos] = object
         setCart(arrayCopy)
         localStorageApp.setItemStorage("cart",JSON.stringify(arrayCopy))
      }
      else {
         let array = [...cart,item]
         setCart(array)
         localStorageApp.setItemStorage("cart",JSON.stringify(array))
      }
      
   }
   const removeItem = (item) => {
      let arrayCopy = [...cart]
      let arrayFilter = arrayCopy.filter(p => p.idProduct !== item.idProduct)
      setCart(arrayFilter)
      localStorageApp.setItemStorage("cart", JSON.stringify(arrayFilter))

   }
   const subItem = (item) => {
      let arrayCopy = [...cart]
      let pos = 0
      let product = arrayCopy.find((p, index) => {
         pos = index
         return p.idProduct === item.idProduct

      })
      if (product.quantity > 1) {
         let object = { ...product, quantity: product.quantity - 1 }
         arrayCopy[pos] = object
         setCart(arrayCopy)
         localStorageApp.setItemStorage("cart", JSON.stringify(arrayCopy))
      }
   }


   let value = { user, logged, cart, addItem, removeItem, subItem,addItemDetail ,setCartEmpty, setUserEmpty }
   return <ApplicationContext.Provider value={value}>
      {children}
   </ApplicationContext.Provider>

}
export default ApplicationProvider

