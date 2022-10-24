import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import FormService from '../../../components/Form/FormService'

type Props = {}

export default function ManageService({}: Props) {
  return (
    <div className='main'>
    <main>
       <FormService/>
    </main>
    <header>
      <div className="search">
        <input type="text"  placeholder='Tìm Kiếm'/>
        <button className='btn-search'><SearchOutlined /></button>
      </div>
      <div className='show-table'>
        <table className='table table-bordered table-striped' border={1}>
          <thead className='bg-secondary'>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>img</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Setting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hoàng</td>
              <td><img src="./img/avt.jpg" style={{width:50, height:50, objectFit:'cover'}} alt="" /></td>
              <td>Paul@gmail.com</td>
              <td>0123456799</td>
              <td>admin</td>
              <td>
                <button className='btn btn-danger mx-2'>Delete</button>
                <button className='btn btn-primary mx-2'>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  </div>
  )
}