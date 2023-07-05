import React from 'react'
import './CreateJournal.css'
import { ArrowLeft } from '@carbon/icons-react';


function CreateJournal() {
  return (
    <div className='create-container'>
     <div className='heading-div'>
        
        <h1 className='create-heading'>Create Jorunal</h1>
     </div>
     <div className='journal-inputs'>
        <div className='input-div'>
            <label>Journal title</label>
            <input type='text' placeholder='Enter Title'></input>
        </div>
        

     </div>
    </div>
  )
}

export default CreateJournal
