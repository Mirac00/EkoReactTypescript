import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddPostService } from '../../services/AddPostService';

function AddPostComponent() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const token = window.localStorage.getItem('jwt');
    const navigate = useNavigate();
  
    const handleAddPost = async () => {
      if (!token) {
        setErrorMessage('Zaloguj się, aby dodać post.');
        return;
      }
  
      try {
        await AddPostService.createPost({ title, content }, token);
        // Dodaj ewentualną logikę czyszczenia pól formularza lub innych działań po dodaniu posta
      } catch (error) {
        console.error('Error adding post:', error);
        // Dodaj ewentualną logikę obsługi błędów
      }
    };
  
    return (
      <div className="mb-3">
        <h3>Dodaj post</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Tytuł</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Treść</label>
            <textarea
              className="form-control"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <button type="button" className="btn btn-primary" onClick={handleAddPost}>Dodaj</button>
        </form>
      </div>
    );
  }
  
  export default AddPostComponent;