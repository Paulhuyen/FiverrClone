import React from 'react'

type Props = {}

export default function FormUser({}: Props) {
  return (
       <div className='form-modal'>
          {/* Modal trigger button */}
          <a type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
            Thêm người dùng
          </a>
          {/* Modal Body */}
          <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">Thêm quản trị viên</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                 <form className='form' action="">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>id</p>
                                <input type="number" />
                                <span className='txt'>err</span>
                            </div>
                            <div className="form-group">
                                <p>Name</p>
                                <input type="name" />
                                <span className='txt'>err</span>
                            </div>
                            <div className="form-group">
                                <p>Password</p>
                                <input type="text" />
                                <span className='txt'>err</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p>Email</p>
                                <input type="text" />
                                <span className='txt'>err</span>
                            </div>
                            <div className="form-group">
                                <p>Phone Number</p>
                                <input type="text" />
                                <span className='txt'>err</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col modal-footer">
                            <button className='btn btn-success mx-2'>Create</button>
                            <button className='btn btn-primary mx-2'>Update</button>
                        </div>
                    </div>
                 </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}