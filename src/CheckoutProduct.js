import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
   const[{basket}, dispatch] = useStateValue()
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} />
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>

				<p className="checkoutProduct_price">
					<small> $ </small>

					<strong> {price}</strong>

					<br />
					<small>
						<small> $ </small>
						<strike>
							1234
							{/*{beforeDiscountPrice}*/}
						</strike>
					</small>
				</p>
				<div className="checkoutProduct_rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>
								<StarIcon className="starIcon" />
							</p>
						))}
				</div>
				<button onClick={removeFromBasket}>
					Remove From Basket
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
