import React from 'react';
import PictureUpload from '../components/PictureUpload';
import RecommendationsContainer from '../containers/RecommendationsContainer';

class AppContainer extends React.Component {
  state = { receivedResponse: false, response: {} };

  handleResponse = response => {
    this.setState({ receivedResponse: true, response: response });
  };

  render() {
    let { receivedResponse, response } = this.state;
    return (
      <div>
        {!receivedResponse ? (
          <PictureUpload handleResponse={this.handleResponse} />
        ) : (
          <RecommendationsContainer response={response} />
        )}
      </div>
    );
  }
}

export default AppContainer;
