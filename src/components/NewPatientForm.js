import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "../constants";
import { API_URL } from "../constants/index";   

class NewPatientForm extends React.Component {
  state = {
    id: 0,
    Prenom: " ",
    Nom: "",
    Adress: "",
    Numerotel: "",
    tension: "",
    Poids: "",
    AntecedentMed:"" ,
    ServiceAffecte: ""
  };

 componentDidMount() {
    if (this.props.patient) {
      const { id, Prenom, Nom, Adress, Numerotel,tension,Poids,AntecedentMed,ServiceAffecte } = this.props.patient;
      this.setState({ id, Prenom, Nom, Adress, Numerotel,tension,Poids,AntecedentMed,ServiceAffecte  });
    }
  }

    onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

   createPatient = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
   editPatient = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id + "/", this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

   defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };
    render() {
    return (
        <Form onSubmit={this.props.patient ? this.editPatient : this.createPatient}>
        <FormGroup>
            <Label for="Prenom">Prénom :</Label>
            <Input
            type="text"
            name="Prenom"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.Prenom)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="Nom">Nom :</Label>
            <Input
            type="text"
            name="Nom"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.Nom)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="Adress">Adresse :</Label>
            <Input
            type="text"
            name="Adress"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.Adress)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="Numerotel">Numéro de téléphone :</Label>
            <Input
            type="text"
            name="Numerotel"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.Numerotel)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="tension">Tension :</Label>
            <Input
            type="text"
            name="tension"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.tension)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="Poids">Poids :</Label>
            <Input
            type="text"
            name="Poids"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.Poids)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="AntecedentMed">Antécédents médicaux :</Label>
            <Input
            type="text"
            name="AntecedentMed"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.AntecedentMed)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="ServiceAffecte">Service affecté :</Label>
            <Input
            type="text"
            name="ServiceAffecte"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ServiceAffecte)}
            />
        </FormGroup>

        <Button>Envoyer</Button>
        </Form>
    );
    }

}

export default NewPatientForm;


