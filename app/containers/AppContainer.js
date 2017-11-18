import React from 'react';
import PictureUpload from '../components/PictureUpload';
import Recommendation from '../components/Recommendation';

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
          <Recommendation />
        )}
      </div>
    );
  }
}

export default AppContainer;
