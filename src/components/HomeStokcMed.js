import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import MedecineList from "./MedicineList";
import NewStockMedModal from "./NewStockMedModal";

import axios from "../constants";
import { APIII_URL } from "../constants/index"; 

class HomeStokcMed extends Component {
  state = {
    medecines: []
  };

  componentDidMount() {
    this.resetState();
  }

  getMedecines = () => {
    axios.get(APIII_URL).then(res => this.setState({ medecines: res.data }));
  };

  resetState = () => {
    this.getMedecines();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <MedecineList
              medecines={this.state.medecines}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <NewStockMedModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeStokcMed;