import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "../constants";
import { APII_URL, API_URL } from "../constants/index";

class NewConsultationForm extends React.Component {
  state = {
    id: 0,
    patient: "",
    Ordonance: "",
    DateMedication: "",
    DateProRDV: "",
    NomMedecin: "",
    patients: []  // ✅ Liste des patients
  };

  componentDidMount() {
    // Charger la liste des patients
    axios.get(API_URL).then(res => {
      this.setState({ patients: res.data });
    });

    // Charger les données de la consultation si modification
    if (this.props.consultation) {
      const { id, patient, Ordonance, DateMedication, DateProRDV, NomMedecin } = this.props.consultation;
      this.setState({ 
        id, 
        patient: patient || "",  // ID du patient
        Ordonance, 
        DateMedication, 
        DateProRDV, 
        NomMedecin 
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createConsultation = e => {
    e.preventDefault();
    axios.post(APII_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editConsultation = e => {
    e.preventDefault();
    axios.put(APII_URL + this.state.id + "/", this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.consultation ? this.editConsultation : this.createConsultation}>
        
        {/* ✅ Nouveau champ pour sélectionner le patient */}
        <FormGroup>
          <Label for="patient">Patient :</Label>
          <Input
            type="select"
            name="patient"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.patient)}
            required
          >
            <option value="">Sélectionnez un patient</option>
            {this.state.patients.map(patient => (
              <option key={patient.id} value={patient.id}>
                {patient.Prenom} {patient.Nom}
              </option>
            ))}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="Ordonance">Ordonance :</Label>
          <Input
            type="text"
            name="Ordonance"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.Ordonance)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="DateMedication">Date Medication :</Label>
          <Input
            type="date"
            name="DateMedication"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.DateMedication)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="DateProRDV">Date Prochain RDV :</Label>
          <Input
            type="date"
            name="DateProRDV"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.DateProRDV)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="NomMedecin">Nom Medecin :</Label>
          <Input
            type="text"
            name="NomMedecin"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.NomMedecin)}
          />
        </FormGroup>

        <Button>Envoyer</Button>
      </Form>
    );
  }
}

export default NewConsultationForm;