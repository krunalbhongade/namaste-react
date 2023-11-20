import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);

    const { resId } = useParams();
    console.log('resId :', resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + resId
        );
        const json = await data.json();
        console.log('Swiggy data : ', json);
        const arrayOfCards = json.data.cards;
        const restaurant_list = "restaurant_grid_listing";
        let resData = [];
        for (const cardObj of arrayOfCards) {
            if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
                resData = cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
            }
        }
        setResInfo(resData);
       
        // setResInfo([{
        //     "info": {
        //         "id": "47439",
        //         "name": "Leon's - Burgers & Wings (Leon Grill)",
        //         "cloudinaryImageId": "uxtqnke0nupbu1i1fmvf",
        //         "locality": "Outer Ring Road",
        //         "areaName": "Marathahalli",
        //         "costForTwo": "₹400 for two",
        //         "cuisines": [
        //             "American",
        //             "Snacks",
        //             "Turkish",
        //             "Portuguese",
        //             "Continental"
        //         ],
        //         "avgRating": 4.2,
        //         "feeDetails": {
        //             "restaurantId": "47439",
        //             "fees": [
        //                 {
        //                     "name": "BASE_DISTANCE",
        //                     "fee": 3400
        //                 },
        //                 {
        //                     "name": "BASE_TIME"
        //                 },
        //                 {
        //                     "name": "ANCILLARY_SURGE_FEE"
        //                 }
        //             ],
        //             "totalFee": 3400
        //         },
        //         "parentId": "371281",
        //         "avgRatingString": "4.2",
        //         "totalRatingsString": "10K+",
        //         "sla": {
        //             "deliveryTime": 28,
        //             "lastMileTravel": 2.8,
        //             "serviceability": "SERVICEABLE",
        //             "slaString": "28 mins",
        //             "lastMileTravelString": "2.8 km",
        //             "iconType": "ICON_TYPE_EMPTY"
        //         },
        //         "availability": {
        //             "nextCloseTime": "2023-11-18 04:00:00",
        //             "opened": true
        //         },
        //         "badges": {},
        //         "isOpen": true,
        //         "type": "F",
        //         "badgesV2": {
        //             "entityBadges": {
        //                 "imageBased": {},
        //                 "textBased": {},
        //                 "textExtendedBadges": {}
        //             }
        //         },
        //         "aggregatedDiscountInfoV3": {
        //             "header": "30% OFF",
        //             "subHeader": "UPTO ₹75"
        //         },
        //         "orderabilityCommunication": {
        //             "title": {},
        //             "subTitle": {},
        //             "message": {},
        //             "customIcon": {}
        //         },
        //         "differentiatedUi": {
        //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //             "differentiatedUiMediaDetails": {
        //                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                 "lottie": {},
        //                 "video": {}
        //             }
        //         },
        //         "reviewsSummary": {},
        //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //         "restaurantOfferPresentationInfo": {}
        //     },
        //     "analytics": {
        //         "context": "seo-data-202dd35a-f73a-4170-b5b9-f8d6c1a02e61"
        //     },
        //     "cta": {
        //         "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-outer-ring-road-marathahalli-bangalore-47439",
        //         "text": "RESTAURANT_MENU",
        //         "type": "WEBLINK"
        //     },
        //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        // }]);
    
    
        //  setResInfo([
        //     {
        //         "info": {
        //             "id": "692371",
        //             "name": "Donne Biryani @99",
        //             "cloudinaryImageId": "1e88d6b0986ca2bbbc89841219da8932",
        //             "locality": "Chinnapanahalli",
        //             "areaName": "Near Shuchodaya Apartment",
        //             "costForTwo": "₹200 for two",
        //             "cuisines": [
        //                 "Biryani",
        //                 "Chinese",
        //                 "Snacks"
        //             ],
        //             "avgRating": 2.9,
        //             "feeDetails": {
        //                 "restaurantId": "692371",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 3600
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 3600
        //             },
        //             "parentId": "262680",
        //             "avgRatingString": "2.9",
        //             "totalRatingsString": "100+",
        //             "sla": {
        //                 "deliveryTime": 28,
        //                 "lastMileTravel": 3.9,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "28 mins",
        //                 "lastMileTravelString": "3.9 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-18 10:30:00",
        //                 "opened": true
        //             },
        //             "badges": {},
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {}
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "₹150 OFF",
        //                 "subHeader": "ABOVE ₹349",
        //                 "discountTag": "FLAT DEAL"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/donne-biryani-99-chinnapanahalli-near-shuchodaya-apartment-bangalore-692371",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     },
        //     {
        //         "info": {
        //             "id": "661411",
        //             "name": "AL-Arabic Shawarma",
        //             "cloudinaryImageId": "b628e1f3e285b7f6d0a47df825d1babf",
        //             "locality": "G M Reddy's Royale Apartments",
        //             "areaName": "Bellandur Sarjapur",
        //             "costForTwo": "₹300 for two",
        //             "cuisines": [
        //                 "Arabian",
        //                 "Snacks",
        //                 "Beverages"
        //             ],
        //             "avgRating": 4.2,
        //             "feeDetails": {
        //                 "restaurantId": "661411",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 4800
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 4800
        //             },
        //             "parentId": "396951",
        //             "avgRatingString": "4.2",
        //             "totalRatingsString": "1K+",
        //             "sla": {
        //                 "deliveryTime": 26,
        //                 "lastMileTravel": 5.7,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "26 mins",
        //                 "lastMileTravelString": "5.7 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-18 07:00:00",
        //                 "opened": true
        //             },
        //             "badges": {},
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {}
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "20% OFF",
        //                 "subHeader": "UPTO ₹50"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/al-arabic-shawarma-g-m-reddys-royale-apartments-bellandur-sarjapur-bangalore-661411",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     },
        //     {
        //         "info": {
        //             "id": "686288",
        //             "name": "The Maggi Company",
        //             "cloudinaryImageId": "af21fd92392ebd6271c6a1c2c2380119",
        //             "locality": "Sunrise Villas",
        //             "areaName": "Bellandur Sarjapur",
        //             "costForTwo": "₹300 for two",
        //             "cuisines": [
        //                 "Snacks"
        //             ],
        //             "avgRating": 4.2,
        //             "feeDetails": {
        //                 "restaurantId": "686288",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 4800
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 4800
        //             },
        //             "parentId": "317741",
        //             "avgRatingString": "4.2",
        //             "totalRatingsString": "100+",
        //             "sla": {
        //                 "deliveryTime": 32,
        //                 "lastMileTravel": 5.9,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "32 mins",
        //                 "lastMileTravelString": "5.9 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-18 16:00:00",
        //                 "opened": true
        //             },
        //             "badges": {},
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {}
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "₹150 OFF",
        //                 "subHeader": "ABOVE ₹349",
        //                 "discountTag": "FLAT DEAL"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/the-maggi-company-sunrise-villas-bellandur-sarjapur-bangalore-686288",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     },
        //     {
        //         "info": {
        //             "id": "571337",
        //             "name": "Sri Ram Bhojanalay",
        //             "cloudinaryImageId": "tvl09sj6rhx2ltw9repf",
        //             "locality": "HAL 2nd Stage",
        //             "areaName": "Indiranagar",
        //             "costForTwo": "₹5 for two",
        //             "cuisines": [
        //                 "North Indian",
        //                 "Bengali",
        //                 "South Indian",
        //                 "Fast Food",
        //                 "Chinese",
        //                 "Biryani",
        //                 "Desserts",
        //                 "Kerala",
        //                 "Punjabi"
        //             ],
        //             "avgRating": 3.8,
        //             "feeDetails": {
        //                 "restaurantId": "571337",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 6000
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 6000
        //             },
        //             "parentId": "194292",
        //             "avgRatingString": "3.8",
        //             "totalRatingsString": "500+",
        //             "sla": {
        //                 "deliveryTime": 34,
        //                 "lastMileTravel": 7.2,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "34 mins",
        //                 "lastMileTravelString": "7.2 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-25 00:00:00",
        //                 "opened": true
        //             },
        //             "badges": {},
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {}
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "₹150 OFF",
        //                 "subHeader": "ABOVE ₹349",
        //                 "discountTag": "FLAT DEAL"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/sri-ram-bhojanalay-hal-2nd-stage-indiranagar-bangalore-571337",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     },
        //     {
        //         "info": {
        //             "id": "763079",
        //             "name": "Seoul Mate Korean Burgers",
        //             "cloudinaryImageId": "2b88b75d1a54b81acf42e83f901d977e",
        //             "locality": "BROOKFIELD",
        //             "areaName": "TECHNOSTAR, Gate 3",
        //             "costForTwo": "₹200 for two",
        //             "cuisines": [
        //                 "Korean",
        //                 "Burgers",
        //                 "Beverages",
        //                 "Fast Food"
        //             ],
        //             "avgRating": 4,
        //             "feeDetails": {
        //                 "restaurantId": "763079",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 3600
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 3600
        //             },
        //             "parentId": "372969",
        //             "avgRatingString": "4.0",
        //             "totalRatingsString": "50+",
        //             "sla": {
        //                 "deliveryTime": 32,
        //                 "lastMileTravel": 3.8,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "32 mins",
        //                 "lastMileTravelString": "3.8 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-25 00:00:00",
        //                 "opened": true
        //             },
        //             "badges": {},
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {}
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "50% OFF",
        //                 "subHeader": "UPTO ₹100"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "isNewlyOnboarded": true,
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/seoul-mate-korean-burgers-brookfield-technostar-gate-3-bangalore-763079",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     },
        //     {
        //         "info": {
        //             "id": "481776",
        //             "name": "Peppy Parathas & Rolls By Chai Point",
        //             "cloudinaryImageId": "ka7li7den051kosp6ii1",
        //             "locality": "AECS Layout, Kundanhahalli",
        //             "areaName": "Marathahalli",
        //             "costForTwo": "₹150 for two",
        //             "cuisines": [
        //                 "Bakery",
        //                 "Beverages",
        //                 "Maharashtrian",
        //                 "Snacks",
        //                 "Street Food",
        //                 "South Indian",
        //                 "Punjabi",
        //                 "Chaat",
        //                 "Indian",
        //                 "American",
        //                 "North Indian",
        //                 "Fast Food",
        //                 "Desserts",
        //                 "Cafe",
        //                 "Healthy Food",
        //                 "Home Food"
        //             ],
        //             "avgRating": 3.8,
        //             "feeDetails": {
        //                 "restaurantId": "481776",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 3600
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 3600
        //             },
        //             "parentId": "289265",
        //             "avgRatingString": "3.8",
        //             "totalRatingsString": "20+",
        //             "sla": {
        //                 "deliveryTime": 30,
        //                 "lastMileTravel": 3.7,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "30 mins",
        //                 "lastMileTravelString": "3.7 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-19 01:00:00",
        //                 "opened": true
        //             },
        //             "badges": {},
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {}
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "40% OFF",
        //                 "subHeader": "UPTO ₹80"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/peppy-parathas-and-rolls-by-chai-point-aecs-layout-kundanhahalli-marathahalli-bangalore-481776",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     },
        //     {
        //         "info": {
        //             "id": "747824",
        //             "name": "32 Degree",
        //             "cloudinaryImageId": "f1595833175018206bee48c55ccad1f7",
        //             "locality": "Aswathnagar",
        //             "areaName": "Mahadevpura",
        //             "costForTwo": "₹300 for two",
        //             "cuisines": [
        //                 "Juices",
        //                 "Snacks",
        //                 "North Indian",
        //                 "Jain",
        //                 "Beverages",
        //                 "Indian"
        //             ],
        //             "avgRating": 4.4,
        //             "veg": true,
        //             "feeDetails": {
        //                 "restaurantId": "747824",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 3000
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 3000
        //             },
        //             "parentId": "23469",
        //             "avgRatingString": "4.4",
        //             "totalRatingsString": "100+",
        //             "sla": {
        //                 "deliveryTime": 30,
        //                 "lastMileTravel": 1.1,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "30 mins",
        //                 "lastMileTravelString": "1.1 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-18 23:59:00",
        //                 "opened": true
        //             },
        //             "badges": {},
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {}
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "10% OFF",
        //                 "subHeader": "UPTO ₹40"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "isNewlyOnboarded": true,
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/32-degree-aswathnagar-mahadevpura-bangalore-747824",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     },
        //     {
        //         "info": {
        //             "id": "149682",
        //             "name": "Samosa Party",
        //             "cloudinaryImageId": "thzhbierhb2qxhqsl0bo",
        //             "locality": "Munnekollal",
        //             "areaName": "Marathahalli",
        //             "costForTwo": "₹100 for two",
        //             "cuisines": [
        //                 "Fast Food",
        //                 "Snacks",
        //                 "Beverages",
        //                 "Chaat",
        //                 "North Indian",
        //                 "Street Food",
        //                 "Sweets",
        //                 "Desserts",
        //                 "Punjabi",
        //                 "Bakery"
        //             ],
        //             "avgRating": 4.2,
        //             "feeDetails": {
        //                 "restaurantId": "149682",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 3000
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 3000
        //             },
        //             "parentId": "6364",
        //             "avgRatingString": "4.2",
        //             "totalRatingsString": "10K+",
        //             "sla": {
        //                 "deliveryTime": 20,
        //                 "lastMileTravel": 2.8,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "20 mins",
        //                 "lastMileTravelString": "2.8 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-25 00:00:00",
        //                 "opened": true
        //             },
        //             "badges": {
        //                 "textExtendedBadges": [
        //                     {
        //                         "iconId": "guiltfree/GF_Logo_android_3x",
        //                         "shortDescription": "options available",
        //                         "fontColor": "#7E808C"
        //                     }
        //                 ]
        //             },
        //             "select": true,
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {
        //                         "badgeObject": [
        //                             {
        //                                 "attributes": {
        //                                     "description": "",
        //                                     "fontColor": "#7E808C",
        //                                     "iconId": "guiltfree/GF_Logo_android_3x",
        //                                     "shortDescription": "options available"
        //                                 }
        //                             }
        //                         ]
        //                     }
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "60% OFF",
        //                 "subHeader": "UPTO ₹120"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/samosa-party-munnekollal-marathahalli-bangalore-149682",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     },
        //     {
        //         "info": {
        //             "id": "763076",
        //             "name": "Boba Bhai",
        //             "cloudinaryImageId": "925e09747cda452f5db48ef720cc1d4d",
        //             "locality": "BROOKFIELD",
        //             "areaName": "TECHNOSTAR, Gate 3",
        //             "costForTwo": "₹200 for two",
        //             "cuisines": [
        //                 "Beverages",
        //                 "Burgers",
        //                 "Korean",
        //                 "Fast Food"
        //             ],
        //             "avgRating": 4,
        //             "feeDetails": {
        //                 "restaurantId": "763076",
        //                 "fees": [
        //                     {
        //                         "name": "BASE_DISTANCE",
        //                         "fee": 3600
        //                     },
        //                     {
        //                         "name": "BASE_TIME"
        //                     },
        //                     {
        //                         "name": "ANCILLARY_SURGE_FEE"
        //                     }
        //                 ],
        //                 "totalFee": 3600
        //             },
        //             "parentId": "361235",
        //             "avgRatingString": "4.0",
        //             "totalRatingsString": "100+",
        //             "sla": {
        //                 "deliveryTime": 31,
        //                 "lastMileTravel": 3.8,
        //                 "serviceability": "SERVICEABLE",
        //                 "slaString": "31 mins",
        //                 "lastMileTravelString": "3.8 km",
        //                 "iconType": "ICON_TYPE_EMPTY"
        //             },
        //             "availability": {
        //                 "nextCloseTime": "2023-11-25 00:00:00",
        //                 "opened": true
        //             },
        //             "badges": {},
        //             "isOpen": true,
        //             "type": "F",
        //             "badgesV2": {
        //                 "entityBadges": {
        //                     "imageBased": {},
        //                     "textBased": {},
        //                     "textExtendedBadges": {}
        //                 }
        //             },
        //             "aggregatedDiscountInfoV3": {
        //                 "header": "50% OFF",
        //                 "subHeader": "UPTO ₹100"
        //             },
        //             "orderabilityCommunication": {
        //                 "title": {},
        //                 "subTitle": {},
        //                 "message": {},
        //                 "customIcon": {}
        //             },
        //             "differentiatedUi": {
        //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //                 "differentiatedUiMediaDetails": {
        //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                     "lottie": {},
        //                     "video": {}
        //                 }
        //             },
        //             "reviewsSummary": {},
        //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //             "isNewlyOnboarded": true,
        //             "restaurantOfferPresentationInfo": {}
        //         },
        //         "analytics": {
        //             "context": "seo-data-336c737d-bf3b-4ed5-8bd4-c13d0e09922d"
        //         },
        //         "cta": {
        //             "link": "https://www.swiggy.com/restaurants/boba-bhai-brookfield-technostar-gate-3-bangalore-763076",
        //             "text": "RESTAURANT_MENU",
        //             "type": "WEBLINK"
        //         },
        //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        //     }
        // ])
    // 
    };
    console.log('resInfo : ', resInfo);
    console.log('resInfo : ', resInfo);

    if(resInfo === null ) return <Shimmer />
    
    // const {name,} = resInfo?.cards[0]?.info;
    return  (

        <div className="menu">
           {/* <h1> <li>{name}</li></h1>  */}
            {/* <h1>{resInfo[0].info.name}</h1> 
             */}
           {/* <h3>{resInfo[0].info.cuisines.join(", ")}</h3> */}
          {/* <h3>{resInfo[0].info.costForTwo}</h3>   */}
          
          {resInfo.map((object) => (
              
              <h1><li key={object.info.id}>
              {object.info.name}</li>
              <li key={object.info.id}> {object.info.cuisines}</li>
              <li key={object.info.id}>
            {object.info.costForTwo}</li>
              </h1>
              
             ))}
  

          
            <ul>
            
               {/* <li>{resInfo[0].info.cuisines}</li> */}

                
           
                
            </ul>
        </div>
    );
};

export default RestaurantMenu;
