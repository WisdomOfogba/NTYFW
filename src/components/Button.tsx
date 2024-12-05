
const Button = ({label, onClick, form}: {label?: string; onClick: () => void; form?: boolean}) => {
  return (
    <div className="text-center mt-10">
      <button className={` font-bold py-3 px-6 rounded-full border-2 border-transparent transition-all duration-300 transform ${form === true ? "bg-blue-700 text-white hover:bg-white hover:text-blue-700 hover:border-blue-700" : "hover:bg-blue-700 hover:border-white hover:text-white bg-white text-blue-700"}`} onClick={onClick}>
        { label || "Buy Now"}
      </button>
    </div>
  );
};


export default Button;
