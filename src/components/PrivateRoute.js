import React from 'react'
import {Route , Redirect} from "react-router-dom"
import {useAuth} from "../context/AuthContext" 
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({component:Component, ...rest }) {
    const {currentUser} = useAuth();

  return (
    <Route
        {...rest}
        render = {props => {
            return currentUser ? <Component {...props} /> : <Navigate  replace to="/login" />
        }}
    >
    </Route>
  )
}
