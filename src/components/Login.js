import React, { useState } from 'react';
import axios from '../constants';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', { 
        username, 
        password 
      });
      
      // Stocker le token
      localStorage.setItem('token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      
      // Redirection
      window.location.href = '/home';
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.response?.data?.error || 'Erreur de connexion. Vérifiez vos identifiants.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ maxWidth: '400px', marginTop: '100px' }}>
      <h2 className="text-center mb-4">Connexion</h2>
      <Form onSubmit={handleLogin}>
        {error && <Alert color="danger">{error}</Alert>}
        
        <FormGroup>
          <Label for="username">Nom d'utilisateur</Label>
          <Input 
            type="text" 
            id="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Entrez votre nom d'utilisateur" 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="password">Mot de passe</Label>
          <Input 
            type="password" 
            id="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Entrez votre mot de passe" 
            required 
          />
        </FormGroup>
        
        <Button 
          color="primary" 
          block 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Connexion...' : 'Se connecter'}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;