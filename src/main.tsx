import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './utils/i18n.tsx'
import './index.css'
import App from './App.tsx'
import NewMemberShip from './app/modules/home/membership/new-membership/NewMembership.tsx'
import RenewMembership from './app/modules/home/membership/renew-membership/RenewMembership.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import authRouter from './app/modules/auth/router.tsx'
import dashboardRouter from './app/modules/dashboard/router.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReissueQRCode from './app/modules/home/membership/reissue-qrcode/ReissueQRCode.tsx'

const mainRouter = [
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not Foudn</div>
  },
  {
    path: "/register",
    element: <NewMemberShip />
  },
  {
    path: "/renew-membership",
    element: <RenewMembership />
  }, 
  {
    path: "/reissue-qrcode",
    element: <ReissueQRCode />
  }
];

const router = createBrowserRouter([...authRouter, ...mainRouter, ...dashboardRouter])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
