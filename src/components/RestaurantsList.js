import React from 'react';
import Restaurant from './Restaurant';

const RestaurantsList = ({list}) => {

    return (
        <div>
            {list.map((item) => (
                <Restaurant key={item.id} restaurant={item} />
            ))}
        </div>
    )
}

export default RestaurantsList;
