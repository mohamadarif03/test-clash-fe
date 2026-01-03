import { RegisterForm } from "../features/auth/components/RegisterForm";
import { LoginIllustration } from "../features/auth/components/LoginIllustration";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <LoginIllustration />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
