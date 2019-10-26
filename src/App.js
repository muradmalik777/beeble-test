import React, {useEffect} from 'react';
import './assets/scss/app.scss';
import Sidebar from './components/Sidebar/Sidebar';
import 'antd/dist/antd.css';

const App = () => {

  useEffect(() => {
    document.title = "Murad | Portfolio"
  })
  
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
}

export default App;
