// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../models/User';
import { AuthenticateRequest } from '../../models/AuthenticateRequest';
import { UserService } from '../../services/UserService';

interface LoginProps {
  setUser: (user: User | null) => void;
  closeModal: () => void; // Add closeModal prop
}

const Login: React.FC<LoginProps> = ({ setUser, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const request: AuthenticateRequest = {
      Username: username,
      Password: password,
    };

    const user: User | null = await UserService.authenticate(request);

    if (user) {
      window.localStorage.setItem('jwt', user.token);
      setUser(user);
      closeModal(); // Close the modal after successful login
      navigate('/');
    } else {
      alert('Nieprawidłowy login lub hasło');
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Login" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" />
      <button onClick={handleLogin}>Zaloguj</button>
    </div>
  );
};

export default Login;
