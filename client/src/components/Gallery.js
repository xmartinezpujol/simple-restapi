import React from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';

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
    document.body.style.overflowY = 'hidden';
    this.setState(() => {
      return {
        modal_opened: 'open',
        selected: id
      }
    });

    const modalimg = document.getElementsByClassName('modal-img')[0];
    modalimg.style.opacity = 0.3;
    setTimeout(() => {
      modalimg.style.opacity = 1;
    }, 300);
  }

  closeModal() {
    setTimeout(() => {
      document.body.style.overflowY = 'scroll';
    }, 1000);
    this.setState(() => {
      return {modal_opened: 'closed'}
    });
    this.props.onDataChange();
  }

  componentDidMount() {
    setTimeout(() => {
      let el = document.querySelector('.gallery-wrapper');
      el.style.opacity = 1;
    }, 500);
  }

  render() {
    let data_gallery = this.props.data;

    return(
      <div className='gallery-wrapper'>
        <h1 className='gallery-title'>{this.props.name}</h1>
        <div className='gallery'>
          {this.props.data.map((card, index) => {
            return(
              <ImageCard
                key={data_gallery[index].id}
                keyword={this.props.keyword}
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
            keyword={this.props.keyword}
            title={data_gallery[this.state.selected].title}
            author={data_gallery[this.state.selected].author}
            imgsel={data_gallery[this.state.selected].img}
            likes={data_gallery[this.state.selected].likes}
            onCloseModal={this.closeModal}
            id={this.state.selected}
            status={this.state.modal_opened} />
        </div>
      </div>
    );
  }
}

export default Gallery;
