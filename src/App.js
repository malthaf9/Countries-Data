import './App.css';
import Body from './components/Body';
import CountryData from './components/CountryData';
import Header from './components/Header';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Body />,
  },
  {
        path: `/countries/:name`,
        element: <CountryData /> 
  }
])

export default App;
