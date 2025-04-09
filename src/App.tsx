import { BrowserRouter, Route, Routes } from 'react-router';

import routes from './config/routes';



function App() {

  return (
    <BrowserRouter>
      
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
