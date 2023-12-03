import { useState } from "react";
import { makeRequest, requestLogin } from "../services/requests";

const Login = () => {
const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');

const login = async () => {
  const body = {
    email,
    password, 
  }

  const { token } = await requestLogin('/login', body)
  console.log(token)


}
  return(
    <div>
      <div>
        <input 
          type="text"
          placeholder="Digite seu email"
          // value={}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password"
          // value={}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button onClick={() => login()}>Entrar</button>
      </div>
    </div>
  )
}

export default Login;