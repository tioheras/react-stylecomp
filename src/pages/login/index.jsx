// ./src/pages/Login/index.jsx

import { useForm, Controller } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from '../login/styles';

const Login = () => {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        navigate('/login'); // Navega para a página de login ou outra lógica de navegação
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="E-mail" leftIcon={<MdEmail />} />}
                            />
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Senha" type="password" leftIcon={<MdLock />} />}
                            />
                            <Button title="Entrar" variant="secondary" type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { Login };
