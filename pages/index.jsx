import Layout from "../components/Layout";

const Home = () => (
  <Layout path="home">
    <>
      <h2 className="display-4 main_title_index">Hey! I am Ritik Srivastava</h2>
      <h4 className="lead">
        A passionate web developer, from Ghaziabad, India.
      </h4>

      <hr className="my-4" />
      <p className="main_intro">
        <a
          href="https://linkedin.com/in/ritiksr25"
          target="_blank"
          className="contactlink"
        >
          <span className="fab fa-linkedin"></span>
        </a>
        <a
          href="https://github.com/ritiksr25"
          target="_blank"
          className="contactlink"
        >
          <span className="fab fa-github git1"></span>
        </a>
        <a
          href="mailto://ritiksr25@gmail.com"
          target="_blank"
          className="contactlink"
        >
          <span className="fas fa-envelope"></span>
        </a>
        <a
          href="https://twitter.com/ritiksr25"
          target="_blank"
          className="contactlink"
        >
          <span className="fab fa-twitter"></span>
        </a>
        <a
          href="https://facebook.com/ritiksr25"
          target="_blank"
          className="contactlink"
        >
          <span className="fab fa-facebook"></span>
        </a>

        <a
          href="https://instagram.com/_ritiksr25"
          target="_blank"
          className="contactlink"
        >
          <span className="fab fa-instagram"></span>
        </a>
      </p>
    </>
  </Layout>
);

export default Home;