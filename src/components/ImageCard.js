import React from 'react';

class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        {this.props.title}
      </div>
    );
  }
}

export default ImageCard;
