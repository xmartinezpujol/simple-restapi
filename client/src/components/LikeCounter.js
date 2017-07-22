import React from 'react';

class LikeCounter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes: this.props.likes
    };

    this.increaseLikes = this.increaseLikes.bind(this);
  }

  increaseLikes(e) {
    e.stopPropagation();
    this.setState(() => {
      return {likes: this.state.likes + 1}
    });

    //Modify data on server
    let url = `http://localhost:8080/api/galleries/${this.props.path}/likeimg`;
    fetch(url)
      .catch((res) => {
        console.log('ERROR: Could not update likes in the API!');
      });
  }

  render() {
    return(
      <div>
        <a className='like-detail' onClick={(e) => this.increaseLikes(e)}>
          <div data-icon="ei-heart" data-size="s"></div>
          <span>{this.state.likes}</span>
        </a>
      </div>
    );
  }
}


export default LikeCounter;
