import React from 'react';
import Gallery from './Gallery';

const data = {
   gallery1: {
     name: 'Oriental food  🍜',
     photos: [
       {
        id: 0,
        title:'Udon',
        color: "#D32F2F",
        resolution: [1280, 1024],
        img: 'udon.jpg',
        downloads: 1452,
        text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
      },
      {
       id: 1,
       title:'Lo mein',
       color: "#673AB7",
       resolution: [1280, 1024],
       img: 'lomein.jpg',
       downloads: 13452,
       text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
     },
     {
      id: 2,
      title:'Ramen',
      color: "#EF6C00",
      resolution: [1280, 1024],
      img: 'ramen.jpg',
      downloads: 11234,
      text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
     id: 3, 
     title:'Soba',
     color: "#827717",
     resolution: [1280, 1024],
     img: 'soba.jpg',
     downloads: 132,
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
