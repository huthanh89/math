import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top:         '50%',
        left:        '50%',
        right:       'auto',
        bottom:      'auto',
        marginRight: '-50%',
        background:  'rgba(0, 0, 0, 0.3)',
        transform:   'translate(-50%, -50%)',
    }
};

Modal.setAppElement('#amazon-modal');

class Component extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal      = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal     = this.closeModal.bind(this);
    };

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    afterOpenModal() {
        this.props.actionAmazonModal(false);
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }
    
    render() {
        return (
            <div>   
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    overlayClassName= "modal-amazon-overlay"
                    contentLabel="Amazon Sponsor"
                >
                    <iframe className="d-block" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ez&f=ifr&linkID=44c429b841ca0c9991be1b5937c9cfc6&t=huthanh89-20&tracking_id=huthanh89-20" width="300" height="250" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>   
                    <button className="d-block float-right" onClick={this.closeModal}> Close </button>
                
                
                </Modal>


            </div>
        );
    }
}

export default Component;