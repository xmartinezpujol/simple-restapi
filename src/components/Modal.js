import React from 'react';

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state= {};
  }

  render(){
    return(
      <div onClick={this.props.onCloseModal} className='modal' data-open={this.props.status}>
        <img src={this.props.imgsel} />
      </div>
    );
  }
}

export default Modal;
