import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { Provider} from 'react-redux'
import store from './Redux/Store'


ReactDOM.render(

  
  <Provider store={store}>
<MoralisProvider serverUrl="https://1boe13ybsmoj.usemoralis.com:2053/server" appId="lrytSy11WjeWad2vEXr2689z0lEhYi77xMsuxHcB">
      <App />
    </MoralisProvider>  
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
