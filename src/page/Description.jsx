import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Description() {
    const[value,setValue] =useState('')
     
  return (
    <div className='ms-3 me-3 '>
        <ReactQuill theme='snow' value={value} onChange={setValue} />
    </div>
  )
}

export default Description