import applelogo from "../assets/logoapple.png";
import { UserAuth } from "../context/AuthContext";
export function Home() {
  const {user, signout} = UserAuth

  return ( <div className="App">
   


  <h1>SUPABASE es COOL</h1>
  <img src={applelogo} className="logo apple" alt="React logo" />
  <div className="card">
    <button onClick={signout}>Logout</button>
  </div>
  <p className="read-the-docs">
    Apple Logout with Supabase
  </p>
</div>);
}