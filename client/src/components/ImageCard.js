import React from 'react';
import Downloader from './Downloader';

class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      downloads: this.props.downloads,
      fetched: false
    };

    this.onImageDownload = this.onImageDownload.bind(this);
  }

  onImageDownload() {
    this.setState(() => {
      return {downloads: this.state.downloads + 1}
    });
  }

  componentDidUpdate() {
    //Fetching control
    if(this.props.downloads > this.state.downloads) {
      this.setState(() => {
        return {downloads : this.props.downloads}
      });
    }
  }

  render() {

    return(
      <div onClick={(e) => this.props.onOpenModal(this.props.id)} className='card'>
        <Downloader keyword={this.props.keyword} id={this.props.id} img={this.props.img} onDownload={this.onImageDownload} />
        <div className='card-image'>
          <img src={window.serverURL + this.props.keyword + window.thumbFolder + this.props.img  + '_s.jpg'} />
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
