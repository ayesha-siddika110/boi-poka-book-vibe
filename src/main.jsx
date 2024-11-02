import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home/Home.jsx';
import ListedBooks from './componants/ListedBooks/ListedBooks.jsx';
import PagesToRead from './componants/PagestoRead/PagesToRead.jsx';
import HomeCenter from './componants/Home/homeCenter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <HomeCenter></HomeCenter>,
        loader: ()=> fetch('../public/booksData.json')
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoRead",
        element: <PagesToRead></PagesToRead>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
