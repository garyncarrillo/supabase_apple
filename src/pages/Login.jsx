import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import supabaselogo from "../assets/supabaselogo.png";
import applelogo from "../assets/logoapple.png";
import { UserAuth } from "../context/AuthContext";

export function Login() {
  const { signInWithApple } = UserAuth();

  return (
    <Container>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />

        <img src={supabaselogo} className="logo supabase" alt="Vite logo" />
      </div>
      <h1>Vite + React + Supabase</h1>
      <img src={applelogo} className="logo apple" alt="React logo" />
      <div className="card">
        <button onClick={signInWithApple}>Login with Apple</button>
      </div>
      <p className="read-the-docs">
        Apple Loging with Supabase
      </p>
    </Container>
  );
}

const Container = styled.div``;