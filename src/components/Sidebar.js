/**
  Sidebar
**/

'use strict';

import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../routes';

const Sidebar = (props) => {
  return (
    <ul className="nav sidebar-nav">
      {
        routes.map((route, idx) => {
          if(route.options && route.options.menu) {
            return (
              <li key={`sb-${idx}`} className={(idx===0) ? "sidebar-branch" : null}>
                <Link to={route.path}>{route.text}</Link>
              </li>
            )
          }
        })
      }
    </ul>
  )
}

export default Sidebar
