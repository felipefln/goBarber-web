import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import getValidationErrors from "../../utils/getValidationErrors";
import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Content, Background } from "./styles";

import * as Yup from "yup";

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required("Nome é obrigatório"),
                email: Yup.string()
                    .required("E-mail é obrigatório")
                    .email("Digite um e-mail valido"),
                password: Yup.string().min(6, "No minimo 6 digitos"),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="logo-gobarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastrado</h1>
                    <Input icon={FiUser} name="name" placeholder="Nome" />
                    <Input icon={FiMail} name="email" placeholder="E-mail" />

                    <Input
                        icon={FiLock}
                        name="password"
                        placeholder="Senha"
                        type="password"
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="login">
                    <FiArrowLeft />
                    Voltar para o Logon
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
