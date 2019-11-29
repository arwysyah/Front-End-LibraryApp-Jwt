
import React from 'react'


const EditModal = props =>
{
    return(
<div>
        <div id="editmodal1" className="modal">
          <div className="modal-content">
            <h4
              style={{
                color: "black"
              }}
            >
              Edit Book
            </h4>
            <div className="row">
              <form className="col s12" onSubmit={props.onSubmit}>
                <div className="row modal-form-row">
                  <div className="input-field col s12">
                    <input
                      name="image_url"
                      id="image_url"
                      type="text"
                      className="validate"
                      value={props.image_url}
                      onChange={props.onChange}
                    />
                    <label htmlFor="image_url" className='active'>Image URL</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="tittle"
                      id="tittle"
                      type="text"
                      className="validate"
                      value={props.tittle}
                      onChange={props.onChange}
                    />
                    <label htmlFor="description" className='active'>Title</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="author"
                      id="author"
                      type="text"
                      className="validate"
                      value={props.author}
                      onChange={props.onChange}
                    />
                    <label htmlFor="description" className='active'>Author</label>
                  </div>
                </div>
              
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="description"
                      id="description"
                      type="text"
                      className="validate"
                      value={props.description}
                      onChange={props.onChange}
                    />
                    <label htmlFor="description"className='active'>Description</label>
                  </div>
                  <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="status"
                      id="status"
                      type="text"
                      className="validate"
                      value={props.status}
                      onChange={props.onChange}
                    />
                    <label htmlFor="status">Status</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="genre"
                      id="genre"
                      type="text"
                      className="validate"
                      value={props.genre}
                      onChange={props.onChange}
                    />
                    <label htmlFor="genre" className='active'>Genre</label>
                  </div>
                </div>
                </div>
                <div className="modal-footer">
                  <button
                    className=" modal-action modal-close waves-effect waves-green btn green top z-depth-5"
                    style={{ marginBottom: "20px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ) 
     }
     export default EditModal