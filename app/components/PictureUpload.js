import Dropzone from 'react-dropzone';
import React from 'react';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import Send from 'material-ui-icons/Send';
import Preview from './Preview';
import axios from 'axios';
import { CircularProgress } from 'material-ui/Progress';
import PropTypes from 'prop-types';

const endpoint = 'http://52.232.1.52:1337/directupload';

class UploadScreen extends React.Component {
  state = {
    filesToBeSent: [],
    picturesUploaded: false,
    sending: false
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    let filesToBeSent = this.state.filesToBeSent;
    filesToBeSent.push(acceptedFiles);
    this.setState({ filesToBeSent, picturesUploaded: true });
  };

  handleSend = () => {
    if (this.state.filesToBeSent.length < 1) {
      console.log('no pictures selected ');
    } else {
      this.setState({ sending: true });
      //put together request
      let formData = new FormData(this);
      this.state.filesToBeSent.forEach(el => {
        formData.append('photos', el[0], el[0].name);
      });
      axios
        .post(endpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          this.props.handleResponse(response);
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    let { picturesUploaded, filesToBeSent, sending } = this.state;
    return (
      <div>
        {sending ? (
          <CircularProgress />
        ) : (
          <Card>
            <h2>Upload pictures here</h2>
            <Dropzone onDrop={files => this.onDrop(files)} />
            <Button raised color="primary" onClick={this.handleSend}>
              Send
              <Send />
            </Button>
            {picturesUploaded ? <Preview pictures={filesToBeSent} /> : <div />}
          </Card>
        )}
      </div>
    );
  }
}

UploadScreen.PropTypes = {
  handleResponse: PropTypes.func
};

export default UploadScreen;
