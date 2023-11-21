const Restaurantcard = (props) => {
  const { resData } = props;

  const { name, id, costForTwo, avgRating } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img
        className="res-logo" 
        src={resData.info.image.url} 
        alt="res-logo"
        /> */}
      <img
        className="res-logo"
        src="https://www.shutterstock.com/image-vector/kfc-logo-icon-art-design-260nw-2269871217.jpg"
        alt="res-logo"
      />

      <h3>{name}</h3>
      <h4>{id}</h4>

      {/* <h4>{resData.order.deliveryTime}</h4> */}
      {/* <h4>{resData.distance}</h4> */}
      <h4>{costForTwo}</h4>
      <h4>{avgRating}⭐</h4>
    </div>
  );
};

export default Restaurantcard;
