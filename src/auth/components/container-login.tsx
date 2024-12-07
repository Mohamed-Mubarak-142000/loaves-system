import LoginForm from "./form-login";
import LoginInfo from "./login-image";

const ContainerLogin = () => {
  return (
    <div className="w-full bg-[#cdcdcd2b] mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      <LoginForm />
      <LoginInfo />
    </div>
  );
};

export default ContainerLogin;
