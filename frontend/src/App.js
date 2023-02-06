import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Choice from './pages/Choice';
import Home from './pages/Home';
import Root from './pages/Root';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index:true, element: <Home/>},
      { path:'/choice', element: <Choice/>},
    ]
  },
])


function App() {
  return (
    <RouterProvider router={router}/>
  
  );
}

export default App;
