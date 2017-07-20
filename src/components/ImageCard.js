import React from 'react';

class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className='card'>
        <div className='card-image'>
          <img src={this.props.img} />
        </div>
        <div className='card-resolution'>
          <span>{`${this.props.resolution[0]} X ${this.props.resolution[1]}`}</span>
        </div>
      <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default ImageCard;
