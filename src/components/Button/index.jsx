import './index.css'

const Button = ({ type = "submit", label = "" , }) => {
  return (
    <>
      <button className="button" type={type} >
        {label}{" "}
      </button>
    </>
  );
};

export default Button