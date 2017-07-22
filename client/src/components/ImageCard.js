import React from 'react';

const THUMBNAILS_FOLDER = '/thumbnails/';
const SERVER_URL = 'http://localhost:8080/';
const HEROKU_URL = 'https://simple-restapi.herokuapp.com/';

class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      downloads: this.props.downloads
    };

    this.downloadImage = this.downloadImage.bind(this);
  }

  downloadImage(e) {
    e.stopPropagation();
    this.setState(() => {
      return {downloads : this.state.downloads + 1}
    });
  }

  render() {
    return(
      <div onClick={(e) => this.props.onOpenModal(this.props.id)} className='card'>
        <a onClick={(e) => this.downloadImage(e)} href={HEROKU_URL + this.props.keyword + '/' + this.props.img + '.jpg'} download>
          <div className='download-image' data-icon="ei-arrow-down" data-size="s"></div>
        </a>
        <div className='card-image'>
          <img src={HEROKU_URL + this.props.keyword + THUMBNAILS_FOLDER + this.props.img  + '_s.jpg'} />
        </div>
        <div className='card-info'>
          <div className='card-res'>
            <div data-icon="ei-image" data-size="s"></div>
            <span>{`${this.props.resolution[0]} x ${this.props.resolution[1]}`}</span>
          </div>
          <div className='card-res'>
            <div data-icon="ei-chart" data-size="s"></div>
            <span>{this.state.downloads}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
