import React from 'react';
import ImageCard from './ImageCard';

class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    let data_gallery = this.props.data;

    return(
      <div className='gallery'>
        {this.props.data.map((card, index) => {
          return(
            <ImageCard
              key={data_gallery[index].title}
              title={data_gallery[index].title}
              img={data_gallery[index].img}
              price={data_gallery[index].price}
              text={data_gallery[index].text}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
