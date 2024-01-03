import "./index.css";

const Input = ({
  id = "",
  type = "",
  placeholder = "",
  name = "",
  isRequired = true,
  value = "",
  onChange = () => {},
}) => {
  return (
    <>
      <div className="input">
        <div>
          <label htmlFor={id}>{name}</label>
        </div>
        <div>
          <input
            name={name}
            id={id}
            className="input1"
            type={type}
            placeholder={placeholder}
            required={isRequired}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
