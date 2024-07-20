import React from 'react';
import "../utils/style.css";

const Sidebar = ({ onSelect }) => (
  <aside>
    <ul className='list'>
      <li className='listitem' onClick={() => onSelect('dashboard')}>Dashboard</li>
      <li className='listitem' onClick={() => onSelect('account')}>Account Page</li>
      <li className='listitem' onClick={() => onSelect('product')}>Product pricing list</li>
      <li className='listitem' onClick={() => onSelect('competitor')}>Competitor</li>
      <li className='listitem' onClick={() => onSelect('report')}>Download Report</li>
      <li className='listitem' onClick={() => onSelect('admin')}>Admin Panel</li>
      <li className='listitem' onClick={() => onSelect('setting')}>Settings</li>
    </ul>
  </aside>
);

export default Sidebar;
