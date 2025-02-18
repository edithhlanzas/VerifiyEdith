import { useState } from "react";

export const NumberInput = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="otp-inputs flex space-x-2">
        {otp.map((data, index) => (
          <input
            key={index}
            type="number"
            maxLength={1}
            className="otp-input border border-gray-300 text-lime-500 focus:outline-none font-bold text-2xl rounded w-10 h-10 text-center"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>
    </div>
  );
};
