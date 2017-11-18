import React from 'react';
import PictureUpload from '../components/PictureUpload';
import RecommendationsContainer from '../containers/RecommendationsContainer';

class AppContainer extends React.Component {
  state = { receivedResponse: false };

  handleResponse = response => {
    this.setState({ receivedResponse: true });
    console.log(response);
  };

  render() {
    let { receivedResponse } = this.state;
    return (
      <div>
        {!receivedResponse ? (
          <PictureUpload handleResponse={this.handleResponse} />
        ) : (
          <RecommendationsContainer data={testData} />
        )}
      </div>
    );
  }
}

export default AppContainer;
const testData = [
  {
    hotel_id: 9640421,
    name: 'Queen Elizabeth Hostel',
    city_id: 30973,
    city: 'London',
    street: '58 Bagleys Lane',
    latitude: 51.4745441999,
    longitude: -0.1887282,
    distance_to_reference: '7.847973887986274',
    star_rating: 0,
    bestseller: false,
    ratings_count_total: 851,
    rating_average: 7,
    discount: 0,
    discountBaseValue: '8.97',
    currency: 'EUR',
    price: '8.97',
    original_price: '8.00',
    original_currency: 'GBP',
    rounded_price: 9,
    alternative_results_count: 0,
    promo: false
  }
];
