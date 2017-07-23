import React from 'react';
import LikeCounter from './LikeCounter';

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      closed: false
    };
  }

  render(){
    return(
      <div onClick={this.props.onCloseModal} className='modal' data-open={this.props.status}>
        <h1 className='title-img'>{this.props.title}</h1>
        <span className='author-img'>{this.props.author}</span>
        <a href={window.serverURL + this.props.keyword + '/' + this.props.imgsel + '.jpg'} download>
          <div className='download-detail' data-icon="ei-arrow-down" data-size="s"></div>
        </a>
        <LikeCounter key={this.props.id} path={`${this.props.keyword}/${this.props.id}`} likes={this.props.likes} />
        <img src={window.serverURL + this.props.keyword + '/' + this.props.imgsel + '.jpg'} />
      </div>
    );
  }
}

export default Modal;
