// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../style/navbarStyle.css';
import { User } from '../../models/User';
import Modal from 'react-modal';
import Login from './Login';
import Register from './Register';

import '../../style/navbarStyle.css'; // Dodaj import dla stylów

interface NavbarProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, setUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<'login' | 'register'>('login');

  const handleLogout = () => {
    window.localStorage.removeItem('jwt');
    setUser(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Eko Project
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Strona główna
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/activeEvents" className="nav-link">
                Aktywne Wydarzenia
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          {user ? (
            <>
              <span className="d-flex align-items-center fs-5 me-3">Witaj: {user.username}</span>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Wyloguj
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setModalContent('login');
                }}
                className="btn btn-primary me-2"
              >
                Zaloguj
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setModalContent('register');
                }}
                className="btn btn-secondary"
              >
                Zarejestruj
              </button>
            </>
          )}
        </div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close m-2" aria-label="Close" onClick={closeModal}></button>
            {modalContent === 'login' ? <Login setUser={setUser} closeModal={closeModal} /> : <Register setIsModalOpen={setIsModalOpen} />}
          </div>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
