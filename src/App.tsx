import { BrowserRouter, Route, Routes } from 'react-router';

import routes from './config/routes';
import Navbar from './layout components/Navbar';



function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          { routes.map((route: any, index: number) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
          ))}
        </Routes>
      {/* Routes to be inserted here. */}
    </BrowserRouter>
  )
}

export default App;
