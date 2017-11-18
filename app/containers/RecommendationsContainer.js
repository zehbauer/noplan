import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import HotelRecommendation from '../components/HotelRecommendation';
import Best5 from '../components/Best5';

class HotelRecommendationsContainer extends React.Component {
  render() {
    let check24data, best5;
    let { response } = this.props;
    if (response.data.c24result) {
      check24data = response.data.c24result.search.results;
      return (
        <Paper>
          {check24data.map((item, i) => {
            return <HotelRecommendation data={item} key={i} />;
          })}
        </Paper>
      );
    } else {
      best5 = response.data.best5;
      return <Best5 data={best5} />;
    }
  }
}

HotelRecommendationsContainer.PropTyes = {
  response: PropTypes.array.isRequired
};

export default HotelRecommendationsContainer;
