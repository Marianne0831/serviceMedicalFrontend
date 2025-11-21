import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewConsultationForm from "./NewConsultationForm";

class NewConsultationModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Consultation";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Consultation";

      button = (
        <Button
          color="primary"
          onClick={this.toggle}
        >
         Create New
        </Button>
      );
    }
    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewConsultationForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              consultation={this.props.consultation}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewConsultationModal;