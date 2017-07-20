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
      <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default ImageCard;
