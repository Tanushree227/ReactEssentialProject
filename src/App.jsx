function Header() {
  return (<header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>OOPS Concepts in Programming</h1>
    <p>
      OOPS refers to languages that use objects in programming, they use objects
      as a primary source to implement what is to happen in the code.
      <br /> Let's deep dive to know more....
    </p>
  </header>);
}

function App() {
  return (
    <div>
    <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
