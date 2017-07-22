import React from 'react';
import LikeCounter from './LikeCounter';

const SERVER_URL = 'http://localhost:8080/';
const HEROKU_URL = 'https://simple-restapi.herokuapp.com/';

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      closed: false
    };

    this.test = this.test.bind(this);

  }

  test(){
  //  alert();

  }

  render(){
    return(
      <div onClick={this.props.onCloseModal} className='modal' data-open={this.props.status}>
        <h1 className='title-img'>{this.props.title}</h1>
        <span className='author-img'>{this.props.author}</span>
        <a href={this.props.imgsel + '.jpg'} download>
          <div className='download-detail' data-icon="ei-arrow-down" data-size="s"></div>
        </a>
        <LikeCounter key={this.props.id} path={`${this.props.keyword}/${this.props.id}`} likes={this.props.likes} />
        <img src={HEROKU_URL + this.props.keyword + '/' + this.props.imgsel + '.jpg'} />
      </div>
    );
  }
}

export default Modal;
