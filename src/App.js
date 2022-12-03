import './App.css';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js'
import Line from './components/Line';




function App() {

  //ユーザー情報を定義
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default App;
