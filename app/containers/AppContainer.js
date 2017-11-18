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
    console.log(id);
    console.log(this.state.response);
    let arrayToFilter = this.state.response.data.c24result.search.results;
    let response = {};
    let res = [];
    // response['data']['c24result']['search']['result'] = _.map(
    //   this.state.response.data.c24result.search.results,
    //   el => {
    //     return id === el.hotel_id;
    //   }
    // );
    let index = _.findIndex(arrayToFilter, el => {
      return id === el.hotel_id;
    });
    if (index !== -1) {
      let arrayStart = arrayToFilter.slice(0, index);
      let arrayEnd = arrayToFilter.slice(index + 1, arrayToFilter.length);
      res = arrayStart.concat(arrayEnd);
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
