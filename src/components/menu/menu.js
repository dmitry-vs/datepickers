import React from "react";
import {NavLink} from "react-router-dom";
import ROUTES from "../../routes";

const Menu = () => <ul>
    <li>
      <NavLink to={ROUTES.INDEX} activeStyle={{color: 'red'}} exact>Home</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.REACT_BOOTSTRAP_DATERANGEPICKER} activeStyle={{color: 'red'}} exact>
        react-bootstrap-daterangepicker
      </NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.REACT_DATEPICKER} activeStyle={{color: 'red'}} exact>react-datepicker</NavLink>
    </li>
  </ul>;

export default Menu;
