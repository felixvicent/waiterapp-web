import { FormEvent, useContext, useState } from "react";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import AuthContext from "../../../../context/auth";

import { Form } from "./styles";

export function LoginForm() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    login({ email, password });

    setEmail("");
    setPassword("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="inputs">
        <Input
          label="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Seu e-mail de acesso"
          type="email"
        />
        <Input
          label="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Informa sua senha"
          type="password"
        />
      </div>

      <Button disabled={!email || !password}>Fazer Login</Button>
    </Form>
  );
}
