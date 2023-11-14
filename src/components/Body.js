import { useState, useEffect } from "react";
import Restaurantcard from "./Restaurantcard";
import resobject from "./utils/mockData";
import Shimmer from "./utils/Shimmer";

const Body = () => {
    const [listOfRestaurants, updateList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://dummyjson.com/products"
        );

        const json = await data.json();
        console.log(json);
        //setTimeout(()=>{updateList(resobject);console.log('timeout')}, 3000);
        updateList(resobject);
    };

    if (listOfRestaurants.length === 0) {
        return <h1><Shimmer /></h1>;
    }

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        updateList(
                            listOfRestaurants.filter(
                                (res) => res.info.rating.aggregate_rating > 4
                            )
                        );
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
