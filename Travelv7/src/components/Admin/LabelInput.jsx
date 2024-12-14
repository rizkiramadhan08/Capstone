import { Label, TextInput, Textarea } from "flowbite-react";

const LabelInput = ({
  label,
  labelValue,
  value,
  name,
  type,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label
          className="text-lg font-semibold"
          htmlFor={labelValue}
          value={label}
        />
      </div>
      {type === "text" ? (
        <TextInput
          className="w-full font-medium"
          id={labelValue}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          required
        />
      ) : (
        <Textarea
          className="w-full font-medium"
          id={labelValue}
          placeholder={placeholder}
          required
          rows={4}
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default LabelInput;
