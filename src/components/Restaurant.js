import React from 'react';

const Restaurant = ({restaurant}) => {
    return (
        <div className="restaurant">
            <img className="image" src={restaurant.image_url} alt={restaurant.name} />
            <div>
                <div className="title">{restaurant.name}</div>
                <div className="address">{restaurant.location.city}, {restaurant.location.state}, {restaurant.location.zip_code}</div>
                <div>Rating: {restaurant.rating}</div>
                <div>Review Count: {restaurant.review_count}</div>
            </div>
        </div>
    )
}

export default Restaurant;
