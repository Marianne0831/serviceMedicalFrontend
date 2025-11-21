import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ConsultationList from "./ConsultationList";
import NewConsultationModal from "./NewConsultationModal";

import axios from "../constants";
import { APII_URL } from "../constants/index"; 

class HomeConsultation extends Component {
  state = {
    consultations: []
  };

  componentDidMount() {
    this.resetState();
  }

  getConsultations = () => {
    axios.get(APII_URL).then(res => this.setState({ consultations: res.data }));
  };

  resetState = () => {
    this.getConsultations();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ConsultationList
              consultations={this.state.consultations}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col  className="text-center">
            <NewConsultationModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeConsultation;