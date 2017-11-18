import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Recommendation from '../components/Recommendation';

class RecommendationsContainer extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <Paper>
        {data.map((item, i) => {
          return <Recommendation data={item} key={i} />;
        })}
      </Paper>
    );
  }
}

export default RecommendationsContainer;
