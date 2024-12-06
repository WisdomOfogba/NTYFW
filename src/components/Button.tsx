
const Button = ({label, onClick, form}: {label?: string; onClick: () => void; form?: boolean}) => {
  return (
    <div className="text-center mt-10">
      <button className={` font-bold text-xl py-3 px-6 rounded-xl border-2 border-transparent transition-all duration-300 transform ${form === true ? "bg-blue-950 text-white hover:bg-white hover:text-blue-950 hover:border-blue-950" : "hover:bg-blue-950 hover:border-white hover:text-white bg-white text-blue-950"} animate-bounce w-full md:w-auto`} onClick={onClick}>
        { label || "Buy Now"}
      </button>
    </div>
  );
};


export default Button;
