const Button = ({ chilren, onClick }) => {
  <button onClick={onClick} className="bg-white text-sky-600 p-2 rounded-sm ">
    {chilren}
  </button>;
};

export default Button;
