import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Sandra"
      body={
        <>
          Hej 🙋‍♀️ Lubię muzykę i fotografię, a najwięcej radości daje mi kontakt z
          naturą oraz długie spacery z moim psem. Obecnie rozwijam swoje
          umiejętności w zakresie front-endu, odkrywając świat tworzenia stron i
          aplikacji internetowych.
        </>
      }
    />
  </Container>
);

export default AuthorPage;