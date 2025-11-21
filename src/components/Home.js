import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import HomeConsultation from "./HomeConsultation";
import HomePatient from "./HomePatient";
import HomeStokcMed from "./HomeStokcMed";
import Header from "./Header";

export const Home = () => {
    const [view, setView] = useState('home');
    //Verifie si le user est connecte

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login';
        }
    }, []);


    return(
        <div>
            <Header />
            <Container style={{ marginTop: "20px" }}>
                <div style={{ marginBottom: "20px", textAlign: "center" }}>
                    <Button 
                        color="primary" 
                        onClick={() => setView('home')}
                        style={{ margin: "10px" }}
                    >
                        Accueil
                    </Button>
                    <Button 
                        color="info" 
                        onClick={() => setView('patients')}
                        style={{ margin: "10px" }}
                    >
                        Gestion des Patients
                    </Button>
                    <Button 
                        color="success" 
                        onClick={() => setView('consultations')}
                        style={{ margin: "10px" }}
                    >
                        Gestion des Consultations
                    </Button>
                    <Button 
                        color="success" 
                        onClick={() => setView('stockageMedicaments')}
                        style={{ margin: "10px" }}
                    >
                        Gestion des Medicaments
                    </Button>
                </div>

                {view === 'home' && (
                    <div style={{ textAlign: "center", padding: "50px" }}>
                        <h2>Bienvenue dans l'application de gestion médicale</h2>
                        <p>Sélectionnez une section ci-dessus pour commencer</p>
                    </div>
                )}
                {view === 'patients' && <HomePatient />}
                {view === 'consultations' && <HomeConsultation />}
                {view === 'stockageMedicaments' && <HomeStokcMed/>}
            </Container>
        </div>
    )
}