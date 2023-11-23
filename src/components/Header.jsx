import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max)
{
  return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
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