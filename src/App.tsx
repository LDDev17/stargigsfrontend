import { BrowserRouter } from 'react-router';

import Navbar from './layout components/Navbar';
import LoginButton from './design components/LoginButton';
import JoinButton from './design components/JoinButton';
import HireButton from './design components/HireButton';
import TextButton from './design components/TextButton';

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <LoginButton />
      <JoinButton />
      <HireButton />
      <TextButton
        buttonText='Sign Up'
      />
      <TextButton
        buttonText='Login'
      />
      {/* Routes to be inserted here. */}
    </BrowserRouter>
  )
}

export default App;
