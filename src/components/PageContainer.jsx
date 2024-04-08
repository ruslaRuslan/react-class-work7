import Footer from "./Footer";

const PageContainer = ({ children }) => {
  return (
    <>
    <Header/>
      {children}
      <Footer />
    </>
  );
};

export default PageContainer;
