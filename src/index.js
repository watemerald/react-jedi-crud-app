import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import App2 from "./lifeCycleDemo/App2";

const element = <h1> Hello Javascript , { 2 + 7 }</h1>

const  content1 =(<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>);

const content2 = <App2/>

ReactDOM.render(
    content1
  ,
  document.getElementById('root')
);
