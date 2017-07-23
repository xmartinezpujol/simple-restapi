import React from 'react';
import LikeCounter from './LikeCounter';

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      closed: false
    };

    this.updateDownloads = this.updateDownloads.bind(this);
  }

  updateDownloads(e) {
    e.stopPropagation();
    //Modify downloads data on server
    let url = `${window.serverURL}api/galleries/${this.props.keyword}/${this.props.id}/downloadimg`;
    fetch(url, {method: 'POST'})
      .catch((res) => {
        console.log('ERROR: Could not update likes in the API!');
      });
  }

  render(){
    return(
      <div onClick={this.props.onCloseModal} className='modal' data-open={this.props.status}>
        <h1 className='title-img'>{this.props.title}</h1>
        <span className='author-img'>{this.props.author}</span>
        <a onClick={(e) => this.updateDownloads(e)} href={window.serverURL + this.props.keyword + '/' + this.props.imgsel + '.jpg'} download>
          <div className='download-detail' data-icon="ei-arrow-down" data-size="s"></div>
        </a>
        <LikeCounter key={this.props.id} path={`${this.props.keyword}/${this.props.id}`} likes={this.props.likes} />
        <img src={window.serverURL + this.props.keyword + '/' + this.props.imgsel + '.jpg'} />
      </div>
    );
  }
}

export default Modal;
