import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Search({}: Props) {
  return (
    <div className="search-form">
      <form className="form" action="">  
        <span className="icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          placeholder='Try "building mobile app"'
          
        />

        <Search/>
        <NavLink to="/job-list">
          <button>Search</button>
        </NavLink>
      </form>
    </div>
  )
}