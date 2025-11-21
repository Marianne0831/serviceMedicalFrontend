import React, { Component } from "react";
import { Table } from "reactstrap";
import NewConsultationModal from "./NewConsultationModal";
import ConsulRemovalModal from "./ConsulRemovalModal";

class ConsultationList extends Component {
  render() {
    const consultations = this.props.consultations;
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Patient</th>  
            <th>Ordonance</th>
            <th>DateMedication</th>
            <th>DateProRDV</th>
            <th>NomMedecin</th>
          </tr>
        </thead>
        <tbody>
          {!consultations || consultations.length <= 0 ? (
            <tr>
              <td colSpan="5" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            consultations.map(consultation => (
              <tr key={consultation.id}>
                <td>{consultation.patient_prenom} {consultation.patient_nom}</td>  {/* ✅ Affichage du patient */}
                <td>{consultation.Ordonance}</td>
                <td>{consultation.DateMedication}</td>
                <td>{consultation.DateProRDV}</td>
                <td>{consultation.NomMedecin}</td>
                <td align="center">
                  <NewConsultationModal
                    create={false}
                    consultation={consultation}
                    resetState={this.props.resetState}
                  />
                </td>
                <td align="center">
                  <ConsulRemovalModal
                    pk={consultation.id}
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

export default ConsultationList;