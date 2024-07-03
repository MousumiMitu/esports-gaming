import React from "react";

interface AppInputProps {
  type?: string;
  name: string;
  id: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  icon?: any;
}

const AppInput: React.FC<AppInputProps> = ({
  type = "text",
  name,
  id,
  placeholder,
  value,
  rows,
  icon,
}) => {
  return (
    <div>
      {type === "text" ? (
        <div className="relative text-secondaryColor">
          <input
            name={name}
            id={id}
            placeholder={placeholder}
            className="border border-activeColor p-2 text-base text-secondaryColor w-full bg-darkColor1 rounded-md"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300">
            {icon}
          </div>
        </div>
      ) : (
        <textarea
          name={name}
          id={id}
          rows={rows}
          className="border border-activeColor p-2 text-base text-secondaryColor w-full bg-darkColor1 rounded-md"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default AppInput;
