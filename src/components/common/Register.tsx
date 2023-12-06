// Register.tsx
import React, { useState } from 'react';
import { RegisterRequest } from '../../models/RegisterRequest';
import { register } from '../../services/userRegisterService';

interface RegisterProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ setIsModalOpen }) => {
  const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterRequest({
      ...registerRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await register(registerRequest);
    setMessage(response.message);
  };

  return (
    <div className="container">
      <h2>Rejestracja</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Imię</label>
          <input type="text" name="firstName" onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Nazwisko</label>
          <input type="text" name="lastName" onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Nazwa użytkownika</label>
          <input type="text" name="username" onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Hasło</label>
          <input type="password" name="password" onChange={handleInputChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Zarejestruj</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
