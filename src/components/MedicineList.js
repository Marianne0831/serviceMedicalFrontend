import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStockMedModal from "./NewStockMedModal";
import StockMedRemovalModal from "./StockMedRemovalModal";

class MedecineList extends Component {
  render() {
    const medecines = this.props.medecines;
    return (
      <Table striped>
        <thead>
          <tr>
            <th>DateFabrication</th>  
            <th>DatePeremptiom</th>
            <th>libelle</th>
            <th>Indication</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!medecines || medecines.length <= 0 ? (
            <tr>
              <td colSpan="4" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            medecines.map(medecine => (
              <tr key={medecine.id}>
                <td>{ medecine.DateFabrication }</td>
                <td>{ medecine.DatePeremptiom }</td>
                <td>{ medecine.libelle }</td>
                <td>{ medecine.Indication }</td>
                <td align="center">
                  <NewStockMedModal
                     create={false}
                    medecine={medecine}  // 
                    resetState={this.props.resetState}
                                    
                  />
                </td>
                <td align="center">
                  <StockMedRemovalModal
                    pk={medecine.id}
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

export default MedecineList;