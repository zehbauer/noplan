import React from 'react';
import PictureUpload from '../components/PictureUpload';
import RecommendationsContainer from '../containers/RecommendationsContainer';
import * as _ from 'lodash';

class AppContainer extends React.Component {
  state = { receivedResponse: false, response: {} };

  handleResponse = response => {
    this.setState({ receivedResponse: true, response: response });
  };
  handleDislike = id => {
    let data = this.state.response.data;
    let arrayToFilter = [];
    if (data) {
      if (data.c24result) {
        arrayToFilter = data.c24result;
      } else if (data.best5) {
        arrayToFilter = data.best5;
      }
    }
    let index = _.findIndex(arrayToFilter, el => {
      return id === el.hotel_id;
    });
    if (index !== -1) {
      let arrayStart = arrayToFilter.slice(0, index);
      let arrayEnd = arrayToFilter.slice(index + 1, arrayToFilter.length);
      let res = arrayStart.concat(arrayEnd);
      debugger;
      this.setState({ response: res });
    }
  };

  render() {
    let { receivedResponse, response } = this.state;
    return (
      <div>
        {!receivedResponse ? (
          <PictureUpload handleResponse={this.handleResponse} />
        ) : (
          <RecommendationsContainer
            response={response}
            handleDislike={this.handleDislike}
          />
        )}
      </div>
    );
  }
}

export default AppContainer;
