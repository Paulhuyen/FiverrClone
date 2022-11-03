import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormUser from "../../../components/Form/FormUser";
import { RootState } from "../../../redux/configStore";
import {
  deleteUser,
  deleteUserApi,
  editUserApi,
  getAllUser,
  searchUserApi,
  UserModal,
} from "../../../redux/reducers/UserReducer";
//ant
import "antd/dist/antd.css";
import ModalManageUser from "../../../HOC/ModalUpdate/ModalManageUser";
import { Drawer, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { trim } from "lodash";
// import Search from 'antd/lib/transfer/search'

type Props = {};
const { Search } = Input;

export default function ManageUser({}: Props) {
  const { arrayUser } = useSelector((state: RootState) => state.UserReducer);
  const dispatch = useDispatch();
  //Draw
  const [openDr, setOpenDr] = useState(false);
  const onClose = () => {
    setOpenDr(false);
  };
  //modal
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  //search
  const onSearch = (value: string) => {
    if (value) {
      const action: any = searchUserApi(value);
      dispatch(action);
    } else {
      const action: any = getAllUser();
      dispatch(action);
    }
  };
  //get all user API
  useEffect(() => {
    const action: any = getAllUser();
    dispatch(action);
  }, []);
  //delete
  const delUser = (id: number) => {
    const actionid: any = deleteUserApi(id);
    dispatch(actionid);
  };
  //edit
  const idUserEdit = (id: number) => {
    const actionid: any = editUserApi(id);
    console.log("id call edit", id);
    dispatch(actionid);
  };
  const renderListUser = () => {
    return arrayUser.map((item: UserModal, index: number) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img
              src={item?.avatar}
              style={{ width: 50, height: 50, objectFit: "cover" }}
              alt="..."
            />
          </td>
          <td>{item.email}</td>
          <td>{item.role}</td>
          <td>
            <div className="d-flex">
              <button
                className="btn btn-danger mx-2"
                onClick={() => {
                  dispatch(deleteUser(item.id));
                  delUser(item.id);
                }}
              >
                <DeleteOutlined />
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => {
                  setOpenDr(true);
                  idUserEdit(item.id);
                }}
              >
                <SettingOutlined />
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="main">
      <main>
        <Button type="primary" onClick={showModal}>
          Thêm người dùng
        </Button>
        <Modal title="Add user" open={open} onCancel={hideModal}>
          <FormUser />
        </Modal>
        <div>
          <Drawer
            title="Manage User"
            width={720}
            onClose={onClose}
            open={openDr}
            bodyStyle={{ paddingBottom: 80 }}
          >
            <ModalManageUser />
          </Drawer>
        </div>
      </main>
      <header>
        <div className="search">
          <Search
            id="keywordRef"
            placeholder="Search"
            className="ip-search"
            onSearch={onSearch}
            // onChange={handleChange}
            enterButton
          />
        </div>
        <div className="show-table">
          <table className="table table-striped ">
            <thead className="thead">
              <tr>
                <th>id</th>
                <th>name</th>
                <th>img</th>
                <th>email</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tbody">{renderListUser()}</tbody>
          </table>

          {/* <Table columns={columns} dataSource={arrayUser}>
          </Table> */}
        </div>
      </header>
    </div>
  );
}
