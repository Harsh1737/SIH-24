import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import screens from "./screens";
import components from "./components";
import { RecoilRoot } from "recoil";

const {
  ClientHome,
  ClientPost,
  ClientPostUsingAI,
  ClientProfile,
  ClientProfileEdit,
  FreelancerHome,
  FreelancerProfile,
  FreelancerProfileEdit,
  Login,
  MainHomePage,
  PreSignup,
  SignUp,
} = screens;

// Create a router instance with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainHomePage />} />

      <Route path="/client-signup" element={<FreelancerProfile />} />
      <Route path="/freelancer-signup" element={<FreelancerProfile />} />
      <Route path="/pre-signup" element={<PreSignup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/freelancer-homepage" element={<FreelancerHome />} />
      <Route path="/freelancer-profile" element={<FreelancerProfile />} />
      <Route
        path="/freelancer-profile-editpage"
        element={<FreelancerProfileEdit />}
      />

      <Route path="/client-homepage" element={<ClientHome />} />
      <Route path="/create-post" element={<ClientPost />} />
      <Route path="/create-postusingai" element={<ClientPostUsingAI />} />
      <Route path="/client-profile" element={<ClientProfile />} />
      <Route path="/client-profile-editpage" element={<ClientProfileEdit />} />
    </>
  )
);

// Render the app with StrictMode and RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
);
