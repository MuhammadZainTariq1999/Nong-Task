import './index.css';
import React from 'react';
import Note from './note';

const Home=({handleLogout})=> {
  return (
    <><section class="hero">
    <nav>
      <h2>welcome</h2>
      <button onClick={handleLogout}> Logout</button>
    </nav>
    <Note/>

    </section>
    </>
  );
};

export default Home;
