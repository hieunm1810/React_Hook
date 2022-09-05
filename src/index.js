import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserStateDemo from './pages/HooksDemo/UseStateDemo/UserStateDemo';
import UseEffectDemo from './pages/HooksDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HooksDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HooksDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HooksDemo/UseRefDemo/UseRefDemo';
import {Provider} from "react-redux"
import { store } from './redux/configStore';
import DemoNumber from './pages/HooksDemo/UseRedux/DemoNumber';
import { DemoFacebookApp } from './pages/HooksDemo/DemoFacebookApp/DemoFacebookApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="usestate" element={<UserStateDemo />}></Route>
          <Route path="useeffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="reduxnumber" element={<DemoNumber />}></Route>
          <Route path="reduxfacebookapp" element={<DemoFacebookApp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
