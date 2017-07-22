import React from 'react';

const SERVER_URL = 'http://localhost:8080/';

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      likes: 0,
      closed: false
    };

    this.likeImage = this.likeImage.bind(this);
  }

  likeImage(e) {
    e.stopPropagation();
    this.setState(() => {
      return {likes : this.state.likes + 1}
    });
  }

  render(){
    return(
      <div onClick={this.props.onCloseModal} className='modal' data-open={this.props.status}>
        <h1 className='title-img'>{this.props.title}</h1>
        <span className='author-img'>{this.props.author}</span>
        <a href={this.props.imgsel + '.jpg'} download>
          <div className='download-detail' data-icon="ei-arrow-down" data-size="s"></div>
        </a>
        <a className='like-detail' onClick={(e) => this.likeImage(e)}>
          <div data-icon="ei-heart" data-size="s"></div>
          <span>{this.props.likes}</span>
        </a>
        <img src={SERVER_URL + this.props.keyword + '/' + this.props.imgsel + '.jpg'} />
      </div>
    );
  }
}

export default Modal;
