import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Choice from './pages/Choice';
import Home from './pages/Home';
import Root from './pages/Root';
import { BlueModeProvider } from './context/BlueModeContext';
import Main from './pages/Main';
import Calendar from './pages/Calendar';
import Rank from './pages/Rank';
import Settings from './pages/Settings';
import Start from './components/home/Start';
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index:true, element: <Start/>},
      // { index:true, element: <Home/>},
      { path:'/home', element: <Home/>},
      { path:'/choice', element: <Choice/>},
      { path:'/main', element: <Main/>},
      { path:'/calendar', element: <Calendar/>},
      { path:'/rank', element: <Rank/>},
      { path:'/settings', element: <Settings/>}
    ]
  },
])


function App() {
  return (
    <BlueModeProvider>
      <AnimatePresence>
        <RouterProvider router={router}/>
      </AnimatePresence>
    </BlueModeProvider>
  
  );
}

export default App;
