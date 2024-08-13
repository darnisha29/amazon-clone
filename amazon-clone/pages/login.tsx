import { Container, Main } from "../styles/sharedstyles";
import LoginForm from "../components/LoginForm";
import { LoginContainer } from "../styles/loginStyles";

export default function Login() {
  return (
    <Container>
      <Main>
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </Main>
    </Container>
  );
}