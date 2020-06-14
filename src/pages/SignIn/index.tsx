import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="logo-gobarber" />

            <form>
                <h1>Faça seu logon</h1>

                <Input icon={FiMail} name="email" placeholder="E-mail" />

                <Input
                    icon={FiLock}
                    name="password"
                    placeholder="Senha"
                    type="passwprd"
                />
                <Button>Entrar</Button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="lohin">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
