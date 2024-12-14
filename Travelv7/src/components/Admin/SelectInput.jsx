import { Label, Select } from "flowbite-react";
import React from "react";

const SelectInput = ({
  label,
  id,
  name,
  value,
  options = [],
  onChange,
  required = false,
  placeholder = "Pilih opsi",
  className = "",
  disabled = false,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="mb-2 block">
          <Label htmlFor={id} value={label} className="text-lg font-medium" />
        </div>
      )}
      <Select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full"
      >
        <option value="" className="disabled:text-black font-medium">{placeholder}</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={typeof option === "object" ? option.value : option}
          >
            {typeof option === "object" ? option.label : option}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectInput;
