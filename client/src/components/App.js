import React from 'react';
import Gallery from './Gallery';


//Simple config
const GALLERY = 'oriental';
const HEROKU = 'https://simple-restapi.herokuapp.com/';
const LOCAL = 'http://localhost:8080/';
const THUMBNAILS_FOLDER = '/thumbnails/';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
      keyword: GALLERY
    };

    this.loadGallery = this.loadGallery.bind(this);
    this.reloadGallery = this.reloadGallery.bind(this);
    this.setServerConfig = this.setServerConfig.bind(this);
  }

  loadGallery(id) {
    let url = `${window.serverURL}api/galleries/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(res => this.setState({ data: res}))
      .catch((res) => {
        console.log('ERROR: No image from API!');
      });
  }

  setServerConfig(serverURL, thumbFolder) {
    window.serverURL = serverURL;
    window.thumbFolder = thumbFolder;
  }

  componentDidMount(){
    this.setServerConfig(HEROKU, THUMBNAILS_FOLDER);
    this.loadGallery(this.state.keyword);
  }

  //Need to reload at each data change on the server
  reloadGallery(){
    this.loadGallery(this.state.keyword);
    this.forceUpdate();
  }

  render(){
    let data = {};

    return(
      <div className='container'>
        {this.state.data !== null &&
          <Gallery key={1} onDataChange={this.reloadGallery} keyword={this.state.keyword} name={this.state.data.name} data={this.state.data.photos} />
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
