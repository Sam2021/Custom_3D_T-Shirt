import React from 'react'

import CustomButton from './CustomButton'



const FilePicker = ({ file, setFile, readFile }) => {
 
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col ">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label filepicker-upload">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate filename">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 filepicker-button">
        <CustomButton 
          type="filled"
          title="Only Logo upload"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        
      </div>
      <div className="mt-4 flex flex-wrap gap-3 filepicker-button1">
      <CustomButton 
          type="filled"
          title="Full t-shirt upload"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
        </div>
       
    </div>
  )
}

export default FilePicker