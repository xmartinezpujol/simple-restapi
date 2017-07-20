import React from 'react';

const IMG_FOLDER = './img/';

class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      downloads: this.props.downloads
    };

    this.downloadImage = this.downloadImage.bind(this);
  }

  downloadImage() {
    this.setState(() => {
      return {downloads : this.state.downloads + 1}
    });
  }

  render() {
    return(
      <div onClick={(e) => this.props.onOpenModal(this.props.id)} className='card'>
        <a onClick={this.downloadImage} href={IMG_FOLDER + this.props.img} download={this.props.img}>
          <div className='download-image' data-icon="ei-arrow-down" data-size="s"></div>
        </a>
        <div className='card-image'>
          <img src={IMG_FOLDER + this.props.img} />
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
