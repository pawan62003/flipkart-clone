import { useEffect } from "react"
import axios from 'axios'

const Ordercheck = () => {
    useEffect(()=>{
        // axios.post('https://weak-pink-rabbit-gear.cyclic.app/Products',{
        //     "categories": "apple",
        //     "title": "Mustard seeds",
        //     "price": 1000,
        //     "defaultImages": "http://img1.exportersindia.com/product_images/bc-small/dir_54/1611062/mustard-seeds-1208829.jpg",
        //     "poster": "https://www.bigbasket.com/media/uploads/p/l/10000200-5_1-fresho-tomato-hybrid.jpg"
        // })
        // .then(res =>console.log(res))
        // .catch()

        // axios.patch(`https://weak-pink-rabbit-gear.cyclic.app/Products/99999`,{
        //     "id": "99999",
        //     "categories": "spice",
        //     "title": "Mustard seeds",
        //     "price": 2000,
        //     "defaultImages": "http://img1.exportersindia.com/product_images/bc-small/dir_54/1611062/mustard-seeds-1208829.jpg",
        //     "poster": "https://www.bigbasket.com/media/uploads/p/l/10000200-5_1-fresho-tomato-hybrid.jpg"
        // })

        axios.delete(`https://weak-pink-rabbit-gear.cyclic.app/Products/XjYDR7D`)
    },[])
    return 
        <div id="order">

        </div>
    
}

export default Ordercheck;