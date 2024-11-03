import { useEffect, useState } from "react";
import Clock from "react-clock";

const CreateClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Clock value={value} renderNumbers={true} className="custom-clock" />;
};

export default CreateClock;
