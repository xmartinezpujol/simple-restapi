import React from 'react';
import Gallery from './Gallery';

const data = {
   gallery1: {
     name: 'My first gallery',
     photos: [
       {
        title:'Image 1',
        color: "#D32F2F",
        resolution: [1280, 1024],
        img: './img/udon.jpg',
        price: 2.10,
        text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
      },
      {
       title:'Image 2',
       color: "#673AB7",
       resolution: [1280, 1024],
       img: './img/lomein.jpg',
       price: 3.10,
       text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
     },
     {
      title:'Image 3',
      color: "#EF6C00",
      resolution: [1280, 1024],
      img: './img/ramen.jpg',
      price: 4.10,
      text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
     title:'Image 4',
     color: "#827717",
     resolution: [1280, 1024],     
     img: './img/soba.jpg',
     price: 5.10,
     text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
   }]}
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className='container'>
        <Gallery name={data.gallery1.name} data={data.gallery1.photos} />
      </div>
    );
  }
}

export default App;
