import { Envelope, Key } from "phosphor-react";
import { FormEvent, useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function SingIn() {
  const [isUserSingedIn, setIsUserSingedIn] = useState(false);

  async function handlerSubmit(event: FormEvent) {
    event.preventDefault();

    await axios.post("sessions", {
      email: "contato@teste.com",
      password: "12345678",
    });

    setIsUserSingedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-cyan-50 flex items-center justify-center">
      <main className="rounded border-cyan-800 border-2 w-full max-w-[600px] px-16 py-12 flex flex-col items-center">
        <header className="flex flex-col items-center">
          <Logo />
          <Heading asChild size="lg" className="mt-4 text-cyan-800">
            <h1>Controle de Pacientes</h1>
          </Heading>
          <Text>Faça o login para usar a plataforma!</Text>
        </header>

        {isUserSingedIn && <Text size="lg">Logado com sucesso!</Text>}

        <form
          onSubmit={handlerSubmit}
          className="flex flex-col w-full items-stretch mt-12"
        >
          <label htmlFor="email" className="flex flex-col gap-4 mb-4">
            <Text className="font-bold text-cyan-800">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input placeholder="johndoe@example.com" id="email" />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className="flex flex-col gap-4 mb-4">
            <Text className="font-bold text-cyan-800">Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Key />
              </TextInput.Icon>
              <TextInput.Input placeholder="************" id="password" />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className="flex items-center gap-2 mb-4">
            <Checkbox id="remember" />
            <Text size="sm">Manter conectado na plataforma</Text>
          </label>

          <Button type="submit">Acessar</Button>
        </form>

        <footer className="mt-8">
          <Text className="underline">Esqueceu a senha?</Text>
        </footer>
      </main>
    </div>
  );
}
