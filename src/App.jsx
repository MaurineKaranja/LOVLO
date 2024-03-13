import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import image1 from "./assets/photo2.jpg"
import SignInWithGoogle from "./pages/signInGoogle"
import Register from "./pages/register"
import './App.css'; 

function App() {
  return (
    <div className="container">
      <div className="images">
        <img src={image1} alt="Image 1" />
      </div>
      <div className="content">
        <h1 className='name'>LOVLO</h1>
        <p className='intro'>An indulgent and soothing experience for healthy and beautiful nails, hands and feet.</p>
        <div className="buttons">
          <button>Login</button>
          <Link to='/register'>Register</Link>
        </div>
        <SignInWithGoogle />
      </div>
    </div>
  );
}

export default App;

