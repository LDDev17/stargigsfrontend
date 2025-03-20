import { BrowserRouter } from 'react-router';

import Navbar from './layout components/navbar';
import Login_button from './design components/Login_button';

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Login_button />
      {/* Routes to be inserted here. */}
    </BrowserRouter>
  )
}

export default App
