import { LoadMore } from "./Button.styled";

export const Button = ({ loadMore}) => {
  return (
    <LoadMore type="button" onClick={loadMore}>
      Load more
    </LoadMore>
  );
};

export default Button;