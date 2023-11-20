import { useState, useEffect } from "react";
import Restaurantcard from "./Restaurantcard";
import resobject from "./utils/mockData";
import Shimmer from "./utils/Shimmer";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, updateList] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variable update, react triggers a reconcillation cycle (re-renders the component).

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");

    const json = await data.json();
    console.log('body data : ', json);
    //setTimeout(()=>{updateList(resobject);console.log('timeout')}, 3000);
    updateList(resobject);
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
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><Restaurantcard resData={restaurant} /></Link>
        })
        }
      </div>
    </div>
  );
};

export default Body;
