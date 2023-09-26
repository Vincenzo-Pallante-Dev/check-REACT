import { useState } from "react";
import { Buttons } from "./Buttons";

export function Form() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);
  const [hidden, setHidden] = useState(false);

  function handleChangeInput(event) {
    const { name, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });

    if (event.target.name === "username") {
      if (event.target.value.length >= 3) {
        setDisabled(false);
      } else setDisabled(true);
    }

    if (event.target.name === "password") {
      if (event.target.value.length > 12) {
        setHidden(false);
      } else setHidden(true);
    }
  }

  function handleResetForm() {
    setData({
      username: "",
      password: "",
    });
    setDisabled(true);
    setHidden(false);
  }

  return (
    <div>
      <input
        name="username"
        placeholder="Username"
        value={data.username}
        autoFocus
        onChange={handleChangeInput}
      ></input>
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChangeInput}
        disabled={disabled}
      ></input>
      {hidden === true && <p>La password è troppo corta minimo 12 caratteri</p>}
      <Buttons onReset={handleResetForm} />
    </div>
  );
}
