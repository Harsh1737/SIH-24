import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { MainHomePage, EmpHome, CustProfile, EmpPost, EmpPostUsingAI, PreSignup } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainHomePage />} />
      <Route path='/emp-login' element={<EmpHome />} />
      <Route path='/cust-profile' element={<CustProfile />} />
      <Route path='/create-post' element={<EmpPost />} />
      <Route path='/create-postusingai' element={<EmpPostUsingAI />} />
      <Route path='/presignup' element={<PreSignup />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
