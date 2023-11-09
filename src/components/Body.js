import { useState } from "react";
import Restaurantcard from "./Restaurantcard";
import resobject from "./utils/mockData";

const Body = () => {
   
    const [listOfRestaurants, updateList] = useState(resobject);
    let a = 10;
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        updateList(listOfRestaurants.filter(
                            (res) => res.info.rating.aggregate_rating > 4
                        ));
                        a = 20;
                        console.log(listOfRestaurants);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant, index) => (
                    <Restaurantcard resData={restaurant} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Body;
