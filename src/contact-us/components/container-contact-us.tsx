import ContactForm from "./contact-form";
import SocialMediaIcons from "./social-media-icon";

const ContainerContactUs = () => {
  return (
    <div className=" bg-[#cdcdcd2b] my-10 p-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[85%] lg:w-[75%] mx-auto">
        <ContactForm />

        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default ContainerContactUs;
