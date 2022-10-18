import { LoadMore } from "./Button.styled";

export const Button = ({ clickHandle }) => {
  return (
    <LoadMore type="button" onClick={clickHandle}>
      Load more
    </LoadMore>
  );
};

export default Button;