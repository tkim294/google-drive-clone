import { useState } from 'react';
import './App.css';
import FilesView from './components/filesView/FilesView';
import Header from './components/header';
import Sidebar from './components/sidebar';
import SideIcons from './components/sideIcons';

import { auth, provider } from './firebase';

import GDriveLogo from './media/google-drive-logo.png';

function App() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      })
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />

            <div className='app__main'>
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login' >
              <img src={GDriveLogo} alt="Goolge Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
        )
      }
      

      {/* no auth: log in */}
    </div>
  );
}

export default App;
