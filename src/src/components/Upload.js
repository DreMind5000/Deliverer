import React from 'react'

const Upload = () => {
     return (
          <div className="container">
               <div className="upload">
                    <h2>Upload File</h2>
                    <form>
                         <input type="text" placeholder="Description..." className="textinput" />
                         <input type="file" className="fileupload" />
                         <button>Upload!</button>
                    </form>
               </div>
          </div>
     )
}

export default Upload
