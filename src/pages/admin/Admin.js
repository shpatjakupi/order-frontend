import React from 'react'
import Adminnav from 'components/admin/AdminNav';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <Adminnav />
      <Outlet /> {/* Her indlæses underordnede komponenter baseret på underordnede ruter */}
    </div>
  )
}

export default Admin