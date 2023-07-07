import React from 'react'
import './CreateJournal.css'



function CreateJournal() {
  return (
    <div className='create-container'>
     <div className='heading-div'>
        
        <h1 className='create-heading'>Create Jorunal</h1>
     </div>
    <div className='all-inputs'>
    <div className='journal-inputs'>
        <div className='input-div'>
            <label>Journal title</label>
            <input type='text' placeholder='Enter Title'></input>
        </div>
        <div className='input-div'>
            <label>Date</label>
            <input type='date' placeholder='Enter Title'></input>
        </div>
        <div className='input-div'>
            <label>Get Location</label>
            <button className='secondary'>Get Location</button>
        </div>
        <div className='input-div'>
            <label>Upload Images</label>
            <input type='file'name='Upload Images' />
        </div>

     </div>

     <div className='input-div'>
        <div className='input-story'>
            <label>Write your story</label>
            <textarea className='story-text'></textarea>
            <button className='primary'>Create Story</button>
        </div>
        
        </div>
        
    </div>
    </div>
  )
}

export default CreateJournal
