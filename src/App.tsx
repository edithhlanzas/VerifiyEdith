import { IoIosArrowRoundBack } from "react-icons/io"; 
import { NumberInput } from "./components/ui/NumberInput";

const App = () => {
  return (
    <>
      <div className="container h-screen flex flex-col justify-center items-center p-4">
        <div className="absolute top-4 left-4">
          <span className="self-start">
            <IoIosArrowRoundBack className="w-7 h-7" />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-md">
          <h1 className="text-center text-2xl mb-4 font-bold">Verification</h1>
          <div className="p-4 text-wrap text-center">
            <h4 className="text-sm text-slate-500">
              We have sent you an email with an OTP,
              <br className="block md:hidden" />
              please enter it below to verify
            </h4>
          </div>
          <NumberInput />
          <h2 className="text-green-600 mt-5">Resend on: 00:32</h2>
          <button className="bg-green-500 p-2 w-full rounded-sm text-white">
            Complete
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
