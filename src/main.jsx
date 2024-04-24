import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import Pagestoead from './components/Pagestoead/Pagestoead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import RWbooks from './components/RWbooks/RWbooks.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import WishbookDetails from './components/WishbookDetails/WishbookDetails.jsx';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/listedbooks',
          element:<ListedBooks></ListedBooks>
        },
        {
          path:'/listedbooks/:id',
          element:<BookDetails></BookDetails>,
          loader:()=>fetch('books.json')
        },
        {
          path:'/rwbooks',
          loader:()=>fetch('books.json'),
          element:<RWbooks></RWbooks>,
        },
        {
          path:'/rwbooks/:id',
          loader:()=>fetch('books.json'),
          element: <WishbookDetails></WishbookDetails>,
        },
        {
          path:'/pages',
          element:<Pagestoead></Pagestoead>
        },
      ]
    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
