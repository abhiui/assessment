import React from 'react';
import RestaurantsList from '../components/RestaurantsList';
import { getRestaurantts, restaurantsList } from '../services/RestaurantsService';

class RestaurantsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }
    async componentDidMount() {
        
        // Un commentt the below line if CORS issue is resolved.

        //const data = await getRestaurantts('Alpharetta', 'Ice Creame');

        // Comment this line if API issue is resolved
        const data = restaurantsList;

        this.setState({
            restaurants: data.businesses
        });
    }

    render() {
        const { restaurants } = this.state;
        return (
            restaurants.length > 0 && (
                <RestaurantsList list={restaurants} />
            )
        )
    }
}

export default RestaurantsContainer;