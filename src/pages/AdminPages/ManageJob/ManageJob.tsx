import { DeleteOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import React, { useState,useEffect } from 'react'
import FormJob from '../../../components/Form/FormJob'
import "antd/dist/antd.css";
import {Button, Drawer, Space, Table} from "antd";
import { ColumnsType } from 'antd/lib/table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/configStore';
import { getAllJobTypeApi } from '../../../redux/reducers/AdminManageJobReducer';
import ModalAddJobType from '../../../HOC/ModalAdd/ModalAddJobType';
type Props = {}

interface DataType {
  id: string;
  tenLoaiCongViec: string;
}
export default function ManageJob({}: Props) {
  const dispatch = useDispatch();
  const {arrJobType} = useSelector((state: RootState)=> state.AdminManageJobReducer);
  console.log('arr',arrJobType)
  useEffect(()=> {
    const action:any = getAllJobTypeApi();
    dispatch(action)
  },[])
  const columns:ColumnsType<DataType> = [
    {
      key:'1',
      title:'ID',
      dataIndex:'id'
    },
    {
      key:'2',
      title:'Tên Loại Công Việc',
      dataIndex:'tenLoaiCongViec'
    },
    {
      key:'3',
      title:'action',
      dataIndex:'action',
      render: (_, { id }) => (
        <div className='btn_action'>
          <button className='btn btn-danger mx-2'><DeleteOutlined /></button>
          <button className='btn btn-primary mx-2'><SettingOutlined /></button>
        </div>
      )
    },
  ]
  //modal
  const [open, setOpen] = useState(false);
  // const [size, setSize] = useState<DrawerProps['size']>();

  const showDefaultDrawer = () => {
    setOpen(true);
  };

  const showLargeDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='main'>
      <main>
      <Button type="primary" onClick={showDefaultDrawer}>
          Thêm Loại Công Việc
       </Button>
       <Drawer
        title="Thêm Loại Công Việc"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
      >
      <ModalAddJobType/>
      </Drawer>
      </main>
              <Table columns={columns} dataSource={arrJobType}>
              </Table>
  </div>
  )
}