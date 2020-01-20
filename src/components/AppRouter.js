import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "./App/App"
import ImageView from "./ImageView/ImageView"

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/image/:id" component={ImageView} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter