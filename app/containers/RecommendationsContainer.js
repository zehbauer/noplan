import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import HotelRecommendation from '../components/HotelRecommendation';
import Best5 from '../components/Best5';

class RecommendationsContainer extends React.Component {
  render() {
    let check24data, best5;
    let { response, handleDislike } = this.props;
    if (response.data && response.data.c24result) {
      check24data = response.data.c24result;
      return (
        <Paper>
          {check24data.map((item, i) => {
            return (
              <HotelRecommendation
                data={item}
                key={i}
                handleDislike={handleDislike}
              />
            );
          })}
        </Paper>
      );
    } else if (response.data && response.data.best5) {
      best5 = response.data.best5;
      return <Best5 data={best5} />;
    } else {
      return (
        <Paper>
          {response.map((item, i) => {
            return (
              <HotelRecommendation
                data={item}
                key={i}
                handleDislike={handleDislike}
              />
            );
          })}
        </Paper>
      );
    }
  }
}

RecommendationsContainer.PropTyes = {
  response: PropTypes.array.isRequired,
  handleDislike: PropTypes.func
};

export default RecommendationsContainer;
