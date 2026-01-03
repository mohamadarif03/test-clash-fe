import { LoginIllustration } from '../features/auth/components/LoginIllustration';
import { LoginForm } from '../features/auth/components/LoginForm';

const LoginPage = () => {
  return (
    <div className="font-display bg-background-light text-[#181211] antialiased overflow-hidden h-screen w-full flex flex-row">
      <LoginIllustration />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
