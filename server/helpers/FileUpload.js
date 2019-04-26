import React, { Component } from 'react';
import axios from 'axios';
import 'babel-polyfill';
import Popup from 'reactjs-popup'

class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // handle your response;
    }).catch(error => {
      // handle your error
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  render () {
    return (
      <form onSubmit={this.submitFile}>
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <Popup trigger={<button type='submit'>Send</button>} position="right center">
          <div>File uploaded!</div>
        </Popup>

      </form>
    );
  }
}

export default FileUpload;
