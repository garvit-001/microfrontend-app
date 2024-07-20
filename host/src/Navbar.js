import React from 'react';
import "../utils/style.css"

const Navbar = () => (
  <nav>
    <div className="flex text-3xl justify-between navbar">
      <div className='left'>
        <div>logo</div>
        <div>chat bot</div>
      </div>
      <div className='right'>
        <div>search box</div>
        <div>profile</div>
      </div>
    </div>
  </nav>
);

export default Navbar;
