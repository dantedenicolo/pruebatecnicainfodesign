import React from 'react';
import { Dashboard, SideBar } from '../../components';



const Home = () => {
  

  return (
    <div className="grid grid-cols-sidebar-dashboard">
      <div>
        <SideBar className="col-sidebar" />
      </div>
      <div>
        <Dashboard className="col-dashboard" />
      </div>
    </div>
  );
};

export default Home;