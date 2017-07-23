import React from 'react';

class Downloader extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.downloadImage = this.downloadImage.bind(this);
  }

  downloadImage(e) {
    e.stopPropagation();
    this.setState(() => {
      return {downloads : this.props.downloads + 1}
    });

    //Modify downloads data on server
    let url = `${window.serverURL}api/galleries/${this.props.keyword}/${this.props.id}/downloadimg`;
    fetch(url, {method: 'POST'})
      .catch((res) => {
        console.log('ERROR: Could not update downloads in the API!');
      });

    this.props.onDownload();
  }

  render() {
    return(
      <a onClick={(e) => this.downloadImage(e)} href={window.serverURL + this.props.keyword + '/' + this.props.img + '.jpg'} download>
        <div className='download-image' data-icon="ei-arrow-down" data-size="s"></div>
      </a>
    );
  }
}

export default Downloader;
