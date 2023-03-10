import React, { useState } from "react";
import "./authorization.css";
import Input from "../utils/input/Input";
import { useDispatch } from "react-redux";
import { logIN } from "../actions/userLog";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="authorization">
      <div className="authorization__header">Авторизация</div>
      <Input
        value={login}
        setValue={setLogin}
        type="text"
        placeholder="Введите Login..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button
        className="authorization__btn"
        onClick={() => dispatch(logIN(login, password))}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
