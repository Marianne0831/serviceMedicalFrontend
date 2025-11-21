import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPatientModal from "./NewPatientModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PatientList extends Component {
  render() {
    const patients = this.props.patients;
    return (
      <Table striped >
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Numéro de téléphone</th>
            <th>Tension</th>
            <th>Poids</th>
            <th>Antécédents médicaux</th>
            <th>Service affecté</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!patients || patients.length <= 0 ? (
            <tr>
              <td colSpan="9" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            patients.map(patient => (
              <tr key={patient.id}>
                <td>{ patient.Prenom }</td>
                <td>{ patient.Nom }</td>
                <td>{ patient.Adress }</td>
                <td>{ patient.Numerotel }</td>
                <td>{ patient.tension }</td>
                <td>{ patient.Poids }</td>
                <td>{ patient.AntecedentMed }</td>
                <td>{ patient.ServiceAffecte }</td>
                <td align="center">
                  <NewPatientModal
                    create={false}
                    patient={patient}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={patient.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PatientList;