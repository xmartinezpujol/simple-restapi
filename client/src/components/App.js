import React from 'react';
import Gallery from './Gallery';

const GALLERY = 'oriental';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
      keyword: GALLERY
    };

    this.loadGallery = this.loadGallery.bind(this);
    this.reloadGallery = this.reloadGallery.bind(this);
  }

  loadGallery(id) {
    let url = `http://localhost:8080/api/galleries/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(res => this.setState({ data: res}))
      .catch((res) => {
        console.log('ERROR: No image from API!');
      });
  }

  //Need to reload at each data change on the server
  reloadGallery(){
    this.forceUpdate();
  }

  render(){
    let data = {};
    this.loadGallery(this.state.keyword);
    return(
      <div className='container'>
        {this.state.data !== null &&
          <Gallery onDataChange={this.reloadGallery} keyword={this.state.keyword} name={this.state.data.name} data={this.state.data.photos} />
        }
        {this.state.data === null &&
          <div className='loader'>
            <div className='cssload-bell'>
            	<div className='cssload-circle'>
            		<div className='cssload-inner'></div>
            	</div>
            	<div className='cssload-circle'>
            		<div className='cssload-inner'></div>
            	</div>
            	<div className='cssload-circle'>
            		<div className='cssload-inner'></div>
            	</div>
            	<div className='cssload-circle'>
            		<div className='cssload-inner'></div>
            	</div>
            	<div className='cssload-circle'>
            		<div className='cssload-inner'></div>
            	</div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
