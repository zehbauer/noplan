import Dropzone from 'react-dropzone';
import React from 'react';

class UploadScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filesToBeSent: []
    };
  }

  onDrop(acceptedFiles, rejectedFiles) {
    // console.log('Accepted files: ', acceptedFiles[0].name);
    var filesToBeSent = this.state.filesToBeSent;
    filesToBeSent.push(acceptedFiles);
    this.setState({ filesToBeSent });
  }

  render() {
    return (
      <div className="App">
        <Dropzone onDrop={files => this.onDrop(files)}>
          <div>
            Try dropping some files here, or click to select files to upload.
          </div>
        </Dropzone>
      </div>
    );
  }
}

export default UploadScreen;
