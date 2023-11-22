import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "./utils/Shimmer";
// import { RESTAURANTS_API } from "./utils/constants";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variable update, react triggers a reconcillation cycle (re-renders the component).

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";
    console.log('arrayOfCards : ',arrayOfCards);

    for (const cardObj of arrayOfCards) {
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setListOfRestaurant(resData);
          console.log('resData : ',resData);
      }
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchtext
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.data.name.includes(searchText)
              );

              setListOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            updateList(
              (fiteredList = listOfRestaurants.filter(
                (res) => res.info.rating.aggregate_rating > 4
              ))
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map((restaurant, index) => {
            console.log('restaurant : ', restaurant);
            return (
              <div>
                
                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><Restaurantcard key={index} resData={restaurant} /></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Body;
