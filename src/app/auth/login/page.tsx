import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
    return (
      <CardWrapper
        headerLabel="Welcome back"
        backButtonHref="/auth/register"
        backButtonLabel="Don't have an account?"
        showSocial
      >
        <LoginForm/>
      </CardWrapper>
    );
  };
  export default LoginPage;