
import { DECREMENT_PRODUCT, DELETE_TO_CART, INCREMENT_PRODUCT ,GET_ADMIN_PRODUCT,CONFORM_ORDER} from "./actionType";

const initalCart = {
    cartData:[
        {
            "title": "Beetroot",
            "qty":1,
            "categories": "vegetable",
            "defaultImages": "https://pngimg.com/uploads/beet/beet_PNG28.png",
            "id": 2111,
            "price": 20,
            "poster": "https://www.bigbasket.com/media/uploads/p/l/10000200-5_1-fresho-tomato-hybrid.jpg"
          },
          {
            "title": "Tomatoes",
            "qty":1,
            "categories": "vegetable",
            "defaultImages": "https://png.pngtree.com/png-vector/20210529/ourmid/pngtree-tomato-food-gourmet-vegetables-png-image_3369387.jpg",
            "id": 2113,
            "price": 25,
            "poster": "https://www.bigbasket.com/media/uploads/p/l/10000200-5_1-fresho-tomato-hybrid.jpg"
          },
          {
            "title": "Celeriac",
            "qty":1,
            "categories": "vegetable",
            "defaultImages": "https://w7.pngwing.com/pngs/252/146/png-transparent-celeriac-leaf-vegetable-food-celery-herbes-leaf-vegetable-food-plant-stem-thumbnail.png",
            "id": 2116,
            "price": 10,
            "poster": "https://www.bigbasket.com/media/uploads/p/l/10000200-5_1-fresho-tomato-hybrid.jpg"
          },
          {
            "id": "1004",
            "qty":1,
            "categories": "spice",
            "title": "Coriander seeds/Dhania",
            "price": 180,
            "defaultImages": "http://img1.exportersindia.com/product_images/bc-small/dir_105/3122483/watermark/eagle-coriander-seeds-1201536.jpg",
            "poster": "https://www.bigbasket.com/media/uploads/p/l/10000200-5_1-fresho-tomato-hybrid.jpg"
          },
          {
            "id": "1005",
            "qty":1,
            "categories": "spice",
            "title": "Fennel seeds",
            "price": 180,
            "defaultImages": "http://img1.exportersindia.com/product_images/bc-small/dir_115/3440565/fennel-seeds-1693027.jpg",
            "poster": "https://www.bigbasket.com/media/uploads/p/l/10000200-5_1-fresho-tomato-hybrid.jpg"
          },
          {
                "id": 35,
                "qty":1,
                "categories": "tshirt",
                "size": "Sizes : 39, 40, 42, 44...",
                "title": "Men Black Printed Henley T-shirt",
                "price": 479,
                "gender": "men",
                "description": "Men Black Printed Henley T-shirt",
                "brand": "Roadster",
                "color": "Blavk",
                "discount": 40,
                "off_price": 799,
                "defaultImages": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg",
                "image": {
                  "image1": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg",
                  "image2": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355633-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-2.jpg",
                  "image3": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355608-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-3.jpg",
                  "image4": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1371410/2016/8/31/11472626355585-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-4.jpg"
                },
                "rating": 4.2,
                "count": 3.6
              }
    ],

    cartHistory:[],
AdminProduct:[],
};

export const reducer = (state=initalCart,{type,payload}) => {
// console.log(type,payload)
  switch(type){
    case DELETE_TO_CART:{
        const updatedData = state.cartData.filter(item => item.id!==payload);
        return {...state,cartData:updatedData};
    }
    case INCREMENT_PRODUCT:{
        const incProduct = state.cartData.map(item => item.id===payload? {...item,qty:item.qty+1}:item)
        return {...state,cartData:incProduct};
    }
    case DECREMENT_PRODUCT:{
        const decProduct = state.cartData.map(item => item.id===payload? {...item,qty:item.qty-1}:item)
        return {...state,cartData:decProduct};
    }
    case CONFORM_ORDER:{
        return {...state,cartData:[],cartHistory:[...state.cartData,...state.cartHistory]}
    }
case GET_ADMIN_PRODUCT:{
return ...state
}
    default:{
        return state;
    }
  }
}


