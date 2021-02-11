import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const ScrambledText = () => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    const values = ["Graphic Designer", "Web Developer"];
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);
      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return <span>{!result ? "Web Developer" : result}</span>;
};

export default ScrambledText;
