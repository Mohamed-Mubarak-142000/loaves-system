import authImage from "../../../assets/login-bg.svg";
import Logo from "@/ui/Logo";

const SideImage = () => {
  return (
    <div className="relative h-44 xl:h-[100vh] bg-gray-100 lg:w-full xl:w-7/12 flex justify-center items-center">
      <div className="absolute top-5 left-5 rtl:right-5">
        <Logo withText={true} />
      </div>
      <div className="w-[30rem] hidden xl:block">
        <img
          src={authImage}
          alt="login image"
          className="rtl:transform rtl:scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default SideImage;
