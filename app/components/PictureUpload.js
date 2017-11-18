import Dropzone from 'react-dropzone';
import React from 'react';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import Send from 'material-ui-icons/Send';
import Preview from './Preview';
import axios from 'axios';
import { CircularProgress } from 'material-ui/Progress';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }})

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
          // console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  handleRemove = pictures => {
    this.setState({ filesToBeSent: pictures });
  };

  render() {
    let { picturesUploaded, filesToBeSent, sending } = this.state;
    return (
      <div>
        {sending ? (
          <CircularProgress />
        ) : (
            <div><Button raised color="primary" onClick={this.handleSend} disabled={!picturesUploaded}>
              <Send />
              Send Pictures
            </Button>
          <Card>
            <h2>Upload pictures here</h2>
            <Dropzone onDrop={files => this.onDrop(files)} />
            {picturesUploaded ? (
              <Preview
                pictures={filesToBeSent}
                onPictureRemove={this.handleRemove}
              />
            ) : (
              <div />
            )}
          </Card>
            </div>
        )}
      </div>
    );
  }
}

UploadScreen.PropTypes = {
  handleResponse: PropTypes.func
};

export default UploadScreen;
