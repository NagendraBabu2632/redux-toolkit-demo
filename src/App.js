import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,createRoutesFromElements,
  Route
} from "react-router-dom";
import DashBoard from './components/DashBoard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<DashBoard />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))
  return (
    <div className="App">
         <RouterProvider router={route} />
    </div>
  );
}

export default App;
