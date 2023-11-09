





   

const Restaurantcard = (props) => {
    const {resData} = props;
    
    const{
        name,
        resId,
        rating,
        rating :{aggregate_rating }
    } = resData?.info;
   
    return(
        <div className="res-card" style ={{backgroundColor:"#f0f0f0"}}>
        <img
        className="res-logo" 
        src={resData.info.image.url} alt="res-logo"
        />
            <h3>{name}</h3>
            <h4>{resId}</h4>
            <h4>{resData.info.rating.aggregate_rating}</h4>
            <h4>{resData.order.deliveryTime}</h4>
            <h4>{resData.distance}</h4>
            <h4>400 For two</h4>
           
        </div>
    )
}

export default Restaurantcard;