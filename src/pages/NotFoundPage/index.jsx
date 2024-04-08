import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const NotFoundPage = ({}) => {
  return (
    <PageContainer>
      <div>404 Not found!</div>
      <Link to="/">geri don</Link>
    </PageContainer>
  );
};

export default NotFoundPage;
