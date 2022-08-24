import React from "react";
import Header from "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div>
			<div className="home_container">
				<img
					className="home_image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home_row">
					<Product
						id="12345678"
						title="SAMSUNG J791 Series 34-Inch Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Thunderbolt 3 Daisy Chain, QLED, HDMI, USB Hub, Height Adjustable Stand (LC34J791WTNXZA), White"
						price={449.99}
						beforeDiscountPrice={529.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg"
					/>
					<Product
						id="12345678"
						title="DJI Mini 3 Pro (DJI RC) – Lightweight and Foldable Camera Drone with 4K/60fps Video, 48MP Photo, 34-min Flight Time, Tri-Directional Obstacle Sensing, Ideal for Aerial Photography and Social Media"
						price={855.99}
						beforeDiscountPrice={955.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/61Y1P6uIRFL._AC_SY355_.jpg"
					/>
				</div>
				<div className="home_row">
					<Product
						id="12345678"
						title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistant College School Computer Bag Gifts for Men"
						price={39.99}
						beforeDiscountPrice={45.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SY355_.jpg"
					/>

					<Product
						id="12345678"
						title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
						price={99.98}
						beforeDiscountPrice={129.89}
						rating={4}
						image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg"
					/>
					<Product
						id="12345678"
						title="Playstation DualSense Wireless Controller"
						price={67.96}
						beforeDiscountPrice={90.0}
						rating={3}
						image="https://m.media-amazon.com/images/I/41UK+fp9jcS._SX342_SY445_.jpg"
					/>
				</div>
				<div className="home_row">
					<Product
						id="12345678"
						title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included"
						price={239.99}
						beforeDiscountPrice={289.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/51oXipGnfHL._AC_SX425_.jpg"
					/>
					<Product
						id="12345678"
						title="RELIFE REBUILD YOUR LIFE Exercise Bike Indoor Cycling Bike Fitness Stationary All-inclusive Flywheel Bicycle with Resistance for Gym Home Cardio Workout Machine Training New Version"
						price={239.99}
						beforeDiscountPrice={289.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71WA3gidcyL._AC_SX425_.jpg"
					/>
				</div>
				<div className="home_row">
					<Product
						id="12345678"
						title="5-Piece Bathroom Decor Set - Bamboo Bathroom Accessories Set with Trash Can, Soap Dish, Soap Dispenser, Toothbrush Holder, and Tray by Lavish Home"
						price={139.99}
						beforeDiscountPrice={159.00}
						rating={5}
						image="https://m.media-amazon.com/images/I/81eb-N6l3nL._AC_SY450_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}
export default Home;
