import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './css/index.css'
import { Route } from './Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={Route()} />
  </>,
)