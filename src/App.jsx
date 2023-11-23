import reactImg from './assets/react-core-concepts.png';
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import componentsImg from './assets/components.png';

function getRandomInt(max)
{
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>{reactDescriptions[getRandomInt(2)]} OOPS Concepts in Programming</h1>
    <p>
      OOPS refers to languages that use objects in programming, they use objects
      as a primary source to implement what is to happen in the code.
      <br /> Let's deep dive to know more....
    </p>
  </header>);
}

function CoreConcept(props)
{
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
    <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title="Encapsulaion" 
            description="data hiding" 
            img = {componentsImg} />
          <CoreConcept 
            title="Polymorphosim" 
            description="many forms" 
            img = {componentsImg}/>
          <CoreConcept 
            title="Inheritance" 
            description="derived classes" 
            img = {componentsImg}
          />
          <CoreConcept 
            title="Data Abstraction" 
            description="displaying the details essential for users" 
            img = {componentsImg}
          />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
