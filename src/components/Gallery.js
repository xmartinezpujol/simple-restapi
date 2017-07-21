import React from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';

const IMG_FOLDER = './img/';

class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal_opened: 'closed',
      selected: 0
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(id) {
    this.setState(() => {
      return {
        modal_opened: 'open',
        selected: id
      }
    });
  }

  closeModal() {
    this.setState(() => {
      return {modal_opened: 'closed'}
    });
  }

  render() {
    let data_gallery = this.props.data;

    return(
      <div>
        <h1 className='gallery-title'>{this.props.name}</h1>
        <div className='gallery'>
          {this.props.data.map((card, index) => {
            return(
              <ImageCard
                key={data_gallery[index].id}
                id={data_gallery[index].id}
                title={data_gallery[index].title}
                img={data_gallery[index].img}
                resolution={data_gallery[index].resolution}
                text={data_gallery[index].text}
                downloads={data_gallery[index].downloads}
                onOpenModal={this.openModal}
              />
            );
          })}
          <Modal
            title={data_gallery[this.state.selected].title}
            author={data_gallery[this.state.selected].author}
            imgsel={IMG_FOLDER + data_gallery[this.state.selected].img}
            likes={data_gallery[this.state.selected].likes}
            onCloseModal={this.closeModal}
            status={this.state.modal_opened} />
        </div>
      </div>
    );
  }
}

export default Gallery;
