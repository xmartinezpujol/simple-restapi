import React from 'react';

const THUMBNAILS_FOLDER = './img/thumbnails/';
const IMG_FOLDER = './img/';

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
        <a onClick={(e) => this.downloadImage(e)} href={IMG_FOLDER + this.props.img + '.jpg'} download={this.props.img + '.jpg'}>
          <div className='download-image' data-icon="ei-arrow-down" data-size="s"></div>
        </a>
        <div className='card-image'>
          <img src={THUMBNAILS_FOLDER + this.props.img + '_s.jpg'} />
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
