import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App(props) {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("aud");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1694172570223-211c25967408?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundRepeat: "no-repeat",
          position: "center",
        }}
      >
        <div className="w-full">
          <h1 className=" text-3xl text-center font-bold text-white py-1 uppercase m-10">
            Currency Converter
          </h1>
          <div className="w-full max-w-xl mx-auto border border-gray-20 rounded-lg p-7 backdrop-blur-sx bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  className="text-xl"
                  label={from}
                  amount={amount}
                  currencyOptions={option}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md cursor-pointer bg-teal-600 font-semibold text-white px-2 py-0.5 uppercase"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  className="text-xl"
                  label={to}
                  amount={convertedAmount}
                  currencyOptions={option}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 cursor-pointer uppercase font-semibold text-white px-4 py-3 rounded-lg"
              >
                Convert {from} to {to}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
