import React from 'react';
import ImageCard from './ImageCard';

class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      const data_gallery = this.props.data;
      <div className='gallery'>
        {this.props.data.map((card) => {
          return(
            <ImageCard
              title={data_gallery.title}
              img={data_gallery.img}
              price={data_gallery.price}
              text={data_gallery.text}
            />
          );
        });
      </div>
    );
  }
}

export default Gallery;
