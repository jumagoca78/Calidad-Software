// Comportamientos
const flyWithWings = () => "¡Vuelo con alas!";
const flyNoWay = () => "No puedo volar.";
const flyWithBalloon = () => "¡Floto con un globo!";

const quack = () => "¡Quack!";
const squeak = () => "¡Squeak!";
const mute = () => "... (silencio)";

// Componente funcional
function Duck({ name, flyBehavior, quackBehavior }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{flyBehavior()}</p>
      <p>{quackBehavior()}</p>
    </div>
  );
}

// Uso del componente
function App() {
  return (
    <>
      <Duck name="Mallard Duck" flyBehavior={flyWithWings} quackBehavior={quack} />
      <Duck name="Rubber Duck" flyBehavior={flyNoWay} quackBehavior={squeak} />
      <Duck name="Model Duck" flyBehavior={flyNoWay} quackBehavior={mute} />
    </>
  );
}

export default App;