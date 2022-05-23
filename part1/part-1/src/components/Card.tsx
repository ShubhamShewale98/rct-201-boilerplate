import { useState } from "react";
import { Link } from "react-router-dom";
// type object  = {
//   product_name:string
// }

function Card({ ...d }) {
  const [cart,setCart] = useState(false)
  return (
    <div className="item">
      <img src="data:image/jpeg;base64,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" className="productImage" />
      <span style={{ textAlign:"left" , display:"block"}}>
        <Link className="productLink" to={`/${d.id}`}>
          {/* Product Name */}
          {d.product_name}

          {/* {id: 2, product_name: 'Samsung galaxy M51', rating: 2.7, price: 37235, category: 'Electronics'} */}
        </Link>
      </span>
      <span style={{ textAlign:"left" , display:"block"}} className="productCategory">{d.category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}

      <span style={{ textAlign:"left" , display:"block"}} className="productPrice">${d.price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span style={{ textAlign:"left" , display:"block"}} className="productRating">Ratings:{d.rating} </span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      
      {cart ? (<div className="itemInCart">Item Already in cart</div> ):(<button className="productAddtoCart" onClick={()=>setCart(true)}>
        Add to cart
      </button>)}
      
       
      
     
    </div>
  );
}

export { Card };
