const Button = ({children, onClickBtn}) => {
  return (
    <button onClick={onClickBtn}>{children}</button>
  );
}

export default Button;
