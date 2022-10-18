import { LoadMore } from "./Button.styled";

const Button = ({ clickHandle }) => {
  return (
    <LoadMore type="button" onClick={clickHandle}>
      Load more
    </LoadMore>
  );
};

export default LoadMore;