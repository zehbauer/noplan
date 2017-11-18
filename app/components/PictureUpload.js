import Dropzone from 'react-dropzone';
import React from 'react';
import Button from 'material-ui/Button';
import Preview from './Preview';

class UploadScreen extends React.Component {
  state = {
    filesToBeSent: [],
    picturesUploaded: false
  };

  onDrop(acceptedFiles, rejectedFiles) {
    let filesToBeSent = this.state.filesToBeSent;
    filesToBeSent.push(acceptedFiles);
    this.setState({ filesToBeSent, picturesUploaded: true });
  }

  render() {
    let { picturesUploaded, filesToBeSent } = this.state;
    return (
      <div>
        <h2>Upload pictures here</h2>
        <Dropzone onDrop={files => this.onDrop(files)} />
        <Button raised color="primary">
          Submit Pictures
        </Button>
        {picturesUploaded ? <Preview pictures={filesToBeSent} /> : <div />}
      </div>
    );
  }
}

export default UploadScreen;
