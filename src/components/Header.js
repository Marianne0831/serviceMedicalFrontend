import React, { Component } from "react";

class Header extends Component {

  
 // Méthode pour gérer la déconnexion
  handleLogout = () => {
    localStorage.removeItem('token'); // Supprime le token
    window.location.href = '/login';  // Redirige vers la page de connexion
  };


  render() {
    return (
      <div className="text-center">
        <div style={{ 
        textAlign: "center",
        padding: "20px 0"
      }}>
      

         <button 
            onClick={this.handleLogout} 
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              padding: "10px 15px",
              backgroundColor: "#0d6efd",
              color: "noir",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Déconnexion
          </button>


      </div>
        
        <img
          src="https://www.health-data-hub.fr/themes/custom/health_data_hub/logo.png"
          width="300"
          className="img-thumbnail"
          style={{ 
            width: "100%",        // L'image prend toute la largeur du header
            maxWidth: "1000px",   // Elle ne dépasse pas trop
            display: "block",
            marginTop: "20px",
            margin: "0 auto" }}
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;