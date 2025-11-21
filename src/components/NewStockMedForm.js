import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "../constants";
import { APIII_URL } from "../constants";

class NewStockMedForm extends React.Component {
  state = {
    id:0,
   DateFabrication :"",
   DatePeremptiom :"",
   libelle : "",
   Indication : "",

  };

  
 componentDidMount() {
    if (this.props.medecine) {
      const { id, DateFabrication, DatePeremptiom, libelle, Indication } = this.props.medecine;
      this.setState({ id, DateFabrication, DatePeremptiom, libelle, Indication  });
    }
  }

    onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

   createStockMed = e => {
    e.preventDefault();
    axios.post(APIII_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
    editStockMed = e => {
        e.preventDefault();
        axios.put(APIII_URL + this.state.id + "/", this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

   defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };
    render() {
    return (
        <Form onSubmit={this.props.medecine ? this.editStockMed: this.createStockMed}>
        <FormGroup>
            <Label for="DateFabrication">DateFabrication :</Label>
            <Input
            type="date"
            name="DateFabrication"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.DateFabrication)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="DatePeremptiom">DatePeremptiom :</Label>
            <Input
            type="date"
            name="DatePeremptiom"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.DatePeremptiom)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="libelle">libelle :</Label>
            <Input
            type="text"
            name="libelle"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.libelle)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="Indication">Indication :</Label>
            <Input
            type="text"
            name="Indication"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.Indication)}
            />
        </FormGroup>


        <Button>Envoyer</Button>
        </Form>
    );
    }

}

export default NewStockMedForm;


