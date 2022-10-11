import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import MenuPages from '../components/MenuPages/MenuPages'

type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <>
      <Header/>
      <MenuPages/>
      <Outlet/>
    </>
  )
}