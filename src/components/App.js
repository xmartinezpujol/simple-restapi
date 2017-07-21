import React from 'react';
import Gallery from './Gallery';

const data = {
   gallery1: {
     name: 'Oriental food  🍜',
     photos: [
       {
        id: 0,
        title:'Sushi',
        author: 'Kuba Boski',
        resolution: [5378, 3585],
        likes: 5,
        img: 'sushi',
        downloads: 1452,
        text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
      },
      {
       id: 1,
       title:'Noodles',
       author: 'Toa Heftiba',
       resolution: [4979, 3456],
      likes: 2,
       img: 'noodles',
       downloads: 13452,
       text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
     },
     {
      id: 2,
      title:'Curry',
      author: 'Noahs Knight',
      resolution: [3888, 2592],
      likes: 1,
      img: 'curry',
      downloads: 11234,
      text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
     id: 3,
     title:'Dim Sum',
     author: 'Tara B',
     resolution: [3449, 2317],
     likes: 15,
     img: 'dim_sum',
     downloads: 132,
     text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
   },
   {
    id: 4,
    title:'Nigiri',
    author: 'Jonathan Forage',
    resolution: [5616, 3744],
    likes: 19,
    img: 'nigiri',
    downloads: 785,
    text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
  },
  {
   id: 5,
   title:'Ramen',
   author: 'Matthew Hamilton',
   resolution: [4795, 3197],
   likes: 85,
   img: 'ramen',
   downloads: 121,
   text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
 },
 {
  id: 6,
  title:'Lo Mein',
  author: 'James Sutton',
  resolution: [5184, 3456],
  likes: 11,
  img: 'lo_mein',
  downloads: 1299,
  text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
},
{
 id: 7,
 title:'Kimchi',
 author: 'Stocksnap',
 resolution: [5184, 3456],
 likes: 2, 
 img: 'kimchi',
 downloads: 45,
 text: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
}
 ]}
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
