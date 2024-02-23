import React from 'react'
import "../App.css"

const NotesCards = () => {

    const arr = [
        {
          collegeName : "IMSEC",
          title: "This is tile",
          des: "this is dec",
          date : "3 days ago"
        },
        {
          collegeName : "IMSEC",
          title: "This is tile",
          des: "this is dec",
          date : "3 days ago"
        },{
          collegeName : "IMSEC",
          title: "This is tile",
          des: "this is dec",
          date : "3 days ago"
        },{
          collegeName : "IMSEC",
          title: "This is tile",
          des: "this is dec",
          date : "3 days ago"
        },{
          collegeName : "IMS Engineering College",
          title: "Database Management System",
          des: "This is most and dost offfffffffffffffffffffffffffffffffff",
          date : "3 days ago"
        },
        {
            collegeName : "IMS Engineering College",
            title: "Database Management System",
            des: "This is most and dost offfffffffffffffffffffffffffffffffff",
            date : "3 days ago"
          },
      ];
  return (
    <div>
        
      <div className='my-5'>!</div>
      <h1 className='my-4 d-flex justify-content-center'>Engineering Notes</h1>
      <div class="d-flex flex-row justify-content-center flex-wrap my-3">
      {arr.map((item) => (
        
        <div class="col-sm-5 mb-3 mb-sm-0 mx-2 my-2  rounded shadow-lg">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{item.collegeName}</h5>
              <hr/>
              <p class="card-text">{item.des}</p>
              <a href="#" download="notes.pdf" class="btn backgroundColor">Download</a>
              <a href="#" class="btn btn-secondary mx-3">View</a>
            </div>
          </div>
        </div>
      
      ))}
      </div>
    </div>
  )
}

export default NotesCards
