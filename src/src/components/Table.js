import React from 'react'

const Table = () => {
     return (
          <div className="container">
               <div className="table">
               <table>
                    <tr>
                         <th>id</th>
                         <th>name</th>
                         <th>description</th>
                         <th>type</th>
                         <th>size</th>
                         <th>date</th>
                         <th>uploader/view</th>
                         <th>hash/view/get</th>
                    </tr>
                    <tr>
                         <td>1 </td>
                         <td> Sujon</td>
                         <td>desc </td>
                         <td>some </td>
                         <td>10MB </td>
                         <td>2/5 </td>
                         <td> Yes</td>
                         <td> Yes</td>
                    </tr>

                    </table>
               </div>
          </div>
     )
}

export default Table
