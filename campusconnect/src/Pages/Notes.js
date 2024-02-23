import React from 'react';
import Header from "../Components/header";
import NotesCards from '../Components/NotesCards';

const Notes = () => {

  

  return (
    <div className='d-flex align-content-space-between'>
      <Header />
      <NotesCards/>
    </div>
  );
};

export default Notes;
