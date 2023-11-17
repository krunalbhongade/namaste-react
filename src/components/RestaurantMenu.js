import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const arrayOfCards = json.data.cards;
        const restaurant_list = "restaurant_grid_listing";
        let resData = [];
        for (const cardObj of arrayOfCards) {
            if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
                resData = cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
            }
        }
        setResInfo(resData);
        console.log('resInfo : ', resInfo);
    };
   
    return resInfo === null ? (
        <Shimmer />
    ) : (

        <div className="menu">
            {/* <h1>{resInfo?.data.cards[0].card.info}</h1> */}
            <h2>Menu</h2>
            <ul>
                {/* <li>{resInfo?.brand}</li> */}
                <li>Burgers</li>
                <li>Diet coke</li>

                {resInfo.map((object) => <li>{object.info.name}</li>)}

            </ul>
        </div>
    );
};

export default RestaurantMenu;
