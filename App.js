import React from "react";
import ReactDOM from "react-dom/client";

// /** 
//  * Header
//  * - Logo
//  * - Nav Items
//  * Body
//  * - Search
//  * - Restaurant Container
//  * - Restaurant Card
//  * Footer
//  * - Copyright
//  * - Links
//  * - Address
//  * - Contact
//  * /

const Header = () => {
    return(
        <div className="header">
        <div className="logo-container">
        <img 
        className="logo"
          src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg"
          />
        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>

        </div>

        </div>
    );
};


const resobject =  {
    "type": "restaurant",
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        "Limage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "sakharam Non-veg",
        "aggregate_rating": "3.8⭐",
        "deliveryTime": "29 min",
        "Kilometre": "5",
        "Limage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/18304348/85ef4d607b390efd1bb662724bacc202.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        
        
        "image": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        
        
        "image": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        
        
        "image": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        
        
        "image": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        
        
        "image": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        
        
        "image": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        
        
        "image": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "info": {
        "resId": 11194,
        "name": "Hyderabad House",
        "aggregate_rating": "3.7⭐",
        "deliveryTime": "27 min",
        "Kilometre": "2",
        
        
        "image": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https://b.zmtcdn.com/data/pictures/chains/8/11178/f4e0b1ba7bdfbcf19cf70cbaba62d8a8_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            
            "rating_text": "3.7",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "512",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "2.9",
                    "reviewCount": "86",
                    "reviewTextSmall": "86 Reviews",
                    "subtext": "86 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "2.9",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "yellow",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.4",
                    "reviewCount": "426",
                    "reviewTextSmall": "426 Reviews",
                    "subtext": "426 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.4",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "₹500 for two"
        },
        "cfo": {
            "text": "₹150 for one"
        },
        "locality": {
            "name": "Camp Area, Pune",
            "address": "Shop 5, Swami Vivekanand Park, Wellesly Road, Camp Area, Pune",
            "localityUrl": "pune/camp-area-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                "url": "https://www.zomato.com/pune/restaurants/fast-food/",
                "name": "Fast Food"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                "url": "https://www.zomato.com/pune/restaurants/shake/",
                "name": "Shake"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/beverages/",
                "name": "Beverages"
            },
            {
                "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https://www.zomato.com/pune/restaurants/desserts/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "₹150 for one"
        }
    },
    "order": {
        
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
            "text": "Order Now",
            "clickUrl": "/pune/cafe-chokolade-1-camp-area/order"
        }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
        "text": "",
        "clickUrl": "/pune/cafe-chokolade-1-camp-area/order",
        "clickActionDeeplink": ""
    },
    "distance": "2 km",
    "isPromoted": true,
    "promotedText": "Promoted",
    "trackingData": [
        {
            "table_name": "zsearch_events_log",
            "payload": "{\"search_id\":\"3fd3916a-bb37-4ec0-ae7c-c3f35a13f962\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"11194\",\"element_type\":\"listing\",\"rank\":1,\"metadata\":{\"is_ad\":\"true\"}}",
            "event_names": {
                "tap": "{\"action\":\"tap\"}",
                "impression": "{\"action\":\"impression\"}"
            }
        }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
        {
            "text": "50% OFF",
            "color": {
                "tint": "500",
                "type": "blue"
            }
        }
    ],
    "isDisabled": false,
    "bottomContainers": [
        {
            "image": {
                "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                "aspect_ratio": 2.0625
            },
            "text": "Restaurant partner follows WHO protocol"
        }

    ]


}
    

const Restaurantcard = (props) => {
    const {resData} = props;
    return(
        <div className="res-card" style ={{backgroundColor:"#f0f0f0"}}>
        <img
        className="res-logo" 
        src={"https://b.zmtcdn.com/data/pictures/chains/0/10220/03d3b05e24b98d8e75fd0d090cb7121f.jpg" + resData.info.Limage} alt="res-logo"
        />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.aggregate_rating}</h4>
            <h4>{resData.info.deliveryTime}</h4>
            <h4>{resData.info.Kilometre}</h4>
            <h4>400 For two</h4>
           
        </div>
    )
} 
const Body = () => {
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
            <Restaurantcard  resData = {resobject[0]}  /> 
            <Restaurantcard  resData = {resobject[1]}  /> 
            <Restaurantcard  resData = {resobject[2]}  />
            
            </div>
        </div>
    )
}


const AppLayout = () => {
    return(
        <div className="App">
      <Header />
      <Body />
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout  />);

