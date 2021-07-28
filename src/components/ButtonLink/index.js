import { useHistory } from "react-router-dom";

export function ButtonLink({ children, to, className, ...props }) {
  const history = useHistory();
  const handleClick = () => history.push(to);
  return (
    <button
      type="button"
      className={"btn " + className}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
