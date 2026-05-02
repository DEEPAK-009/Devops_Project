import "../styles/home.css";

const Home = () => {
  return (
    <div className="cover">
      <header className="cover__header">
        <span className="cover__logo">DevOps</span>
      </header>
      <main className="cover__main">
        <h1 className="cover__title">Welcome</h1>
        <p className="cover__tagline">Simple web app — CI/CD ready.</p>
      </main>
      <footer className="cover__footer">
        <small>&copy; {new Date().getFullYear()}</small>
      </footer>
    </div>
  );
};

export default Home;
