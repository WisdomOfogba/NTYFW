import { ChevronDown } from "lucide-react";

type AccordionProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

const Accordion = ({ title, isOpen, onToggle, children }: AccordionProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className={`w-full text-left p-4 font-medium hover:text-white hover:bg-blue-950 ${
          isOpen ? "bg-blue-950 text-white" : "bg-white text-gray-800"
        } focus:outline-none flex items-center justify-between transition-all duration-300`}
        onClick={onToggle}
      >
        {title}
        <ChevronDown />
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 text-start bg-white">{children}</div>
      </div>
    </div>
  );
};
export default Accordion;
