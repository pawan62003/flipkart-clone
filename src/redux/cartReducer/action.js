import { ADD_TO_CART, DECREMENT_PRODUCT, DELETE_TO_CART, INCREMENT_PRODUCT,  } from "./actionType"

export const addToCart = (payload) => {
   return {type:ADD_TO_CART,payload}
}

export const deleteCart = (payload) => {
    return {type:DELETE_TO_CART,payload}
}

export const incrementProduct = (payload) => {
   return {type:INCREMENT_PRODUCT,payload}
}

export const decrementProduct = (payload) => {
    return {type:DECREMENT_PRODUCT,payload}
}


// {
//     "id": 35,
//     "categories": "tshirt",
//     "size": "Sizes : 39, 40, 42, 44...",
//     "title": "Men Black Printed Henley T-shirt",
//     "price": 479,
//     "gender": "men",
//     "description": "Men Black Printed Henley T-shirt",
//     "brand": "Roadster",
//     "color": "Blavk",
//     "discount": 40,
//     "off_price": 799,
//     "defaultImages": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg",
//     "image": {
//       "image1": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg",
//       "image2": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355633-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-2.jpg",
//       "image3": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355608-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-3.jpg",
//       "image4": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355585-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-4.jpg"
//     },
//     "rating": 4.2,
//     "count": 3.6
//   },

// {
//     "id": "1001",
//     "categories": "spice",
//     "title": "Pepper",
//     "price": 120,
//     "defaultImages": "http://img1.exportersindia.com/product_images/bc-small/dir_23/674664/black-pepper-seed-1680115.jpg",
//     "poster": "https://www.bigbasket.com/media/uploads/p/l/10000200-5_1-fresho-tomato-hybrid.jpg"
//   },