import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handler_click1 = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="h-auto w-3/5 bg-sky-600 text-white rounded-xl p-10 m-20 flex flex-col justify-center items-center">
          <div>
            <h1 className="mb-1 text-3xl font-bold ">ONE MORE THING!</h1>
            <p className="break-all">
              fxlkh,klx,fldhx,;bkggkltrh;blffbbbbbbndvvvvfxlkh,klx,fldhx,;bkggkltrh;blffbbbbbbndvvvv
            </p>
          </div>

          <div className="flex flex-row space-x-10 mt-4">
            <button className="p-2 "> no, go back</button>

            <button
              onClick={handler_click1}
              className="bg-white text-sky-600 p-2 rounded-sm"
            >
              understood!
            </button>
          </div>
        </div>
      )}
      <button
        onClick={handler_click1}
        className="bg-white text-sky-600 p-2 rounded-sm"
      >
        understood!
      </button>
    </>
  );
}

export default App;
