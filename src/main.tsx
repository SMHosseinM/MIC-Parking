import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './utils/i18n.tsx'
import './index.css'
import App from './App.tsx'
import NewMemberShip from './app/modules/home/membership/new-membership/NewMembership.tsx'
import RenewMembership from './app/modules/home/membership/renew-membership/RenewMembership.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReissueQRCode from './app/modules/home/membership/reissue-qrcode/ReissueQRCode.tsx'

const router = createBrowserRouter([
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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
