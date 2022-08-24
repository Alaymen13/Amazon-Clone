import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ id, title, image, price, beforeDiscountPrice, rating }) {
	const [{ basket }, dispatch] = useStateValue();
console.log("this is the basket", basket);
	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	const [strLength, setStrLength] = useState([]);

	useEffect(() => {
		if (window.innerWidth < 760) {
			setStrLength(50);
		} else {
			setStrLength(200);
		}
		console.log(strLength);
	}, [strLength]);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<div className="product">
			<div className="product_info">
				<p>{truncate(title, `${strLength}`)}</p>

				<p className="product_price">
					<small> $ </small>

					<strong> {price} </strong>

					<br />
					<small>
						<small> $ </small>
						<strike> {beforeDiscountPrice} </strike>
					</small>
				</p>
				<div className="product_rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>
								<StarIcon className="starIcon" />
							</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={addToBasket}>Add To Basket</button>
		</div>
	);
}
export default Product;
