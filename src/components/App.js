import React from 'react';
import Gallery from './Gallery';

const data = {
   gallery1: [
     {
      title:'Image 1',
      color: "#D32F2F",
      img: '',
      price: 2.10,
      text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
     title:'Image 2',
     color: "#673AB7",
     img: '',
     price: 3.10,
     text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
   },
   {
    title:'Image 3',
    color: "#EF6C00",
    img: '',
    price: 4.10,
    text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
  },
  {
   title:'Image 4',
   color: "#827717",
   img: '',
   price: 5.10,
   text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
 }]
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className='container'>
        <Gallery data={data.gallery1} />
      </div>
    );
  }
}

export default App;
