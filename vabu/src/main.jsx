import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@/index.css'
import HomePage from '@pgcomponent/HomePage'
import VisaPage from '@pgcomponent/VisaPage'
import ScholarshipPage from '@pgcomponent/ScholarshipPage'
import ShippingPage from '@pgcomponent/ShippingPage'
import ProductsPage from '@pgcomponent/ProductsPage'
import AboutUsPage from '@pgcomponent/AboutUsPage'
import ContactsPage from '@pgcomponent/ContactsPage'
import UnfoundPage from '@pgcomponent/UnfoundPage'

// browser routs
const router = createBrowserRouter([
  {path: "/", element: <HomePage/>},
  {path: "/visa", element: <VisaPage/>},
  {path: "/scholarships", element: <ScholarshipPage/>},
  {path: "/shipping", element: <ShippingPage/>},
  {path: "/products", element: <ProductsPage/>},
  {path: "/contacts", element: <ContactsPage/>},
  {path: "/aboutus", element: <AboutUsPage/>},
  {path: "*", element: <UnfoundPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
