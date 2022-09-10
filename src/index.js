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
import ReactForm from './pages/HooksRouter/ReactForm/ReactForm';
import Profile from './pages/HooksRouter/ReactForm/Profile';
import Home from "./pages/Home/Home.jsx";
import Detail from './pages/Detail/Detail';
import Search from './pages/Search/Search';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
            {/* cho nay dat ten gi cung duoc nhung phai su dung lai ten do */}
          </Route>
          <Route path="usestate" element={<UserStateDemo />}></Route>
          <Route path="useeffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="reduxnumber" element={<DemoNumber />}></Route>
          <Route path="reduxfacebookapp" element={<DemoFacebookApp />}></Route>
          <Route path="reactform" element={<ReactForm />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="search" element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
