import { BrowserRouter, Route, Routes } from 'react-router';

import routes from './config/routes';
import RouteType from './types/RouteType';



function App() {

  return (
    <BrowserRouter>
      
        <Routes>
          { routes.map((route: RouteType, index: number) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
          ))}
        </Routes>
    </BrowserRouter>
  )
}

export default App;
