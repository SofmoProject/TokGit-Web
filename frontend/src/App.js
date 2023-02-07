import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Choice from './pages/Choice';
import Home from './pages/Home';
import Root from './pages/Root';
import { BlueModeProvider } from './context/BlueModeContext';
import Main from './pages/Main';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index:true, element: <Home/>},
      { path:'/choice', element: <Choice/>},
      { path:'/main', element: <Main/>}
    ]
  },
])


function App() {
  return (
    <BlueModeProvider>
      <RouterProvider router={router}/>
    </BlueModeProvider>
  
  );
}

export default App;
