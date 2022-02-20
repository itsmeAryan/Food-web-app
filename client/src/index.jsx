import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import Store from "./Setup/Redux/Store"
import {Provider} from "react-redux"
import {BrowserRouter as Browser} from "react-router-dom"
import {CookiesProvider} from "react-cookie"
const RootElement=document.getElementById("root");
ReactDOM.render(
    <Provider store={Store}>
        <Browser>
    <CookiesProvider>
    <App/>
    </CookiesProvider>
    </Browser>
    </Provider>
    ,
    RootElement
)