const Heading = ({ color, text }) => {
  const headingStyle = { color, fontSize: `48px`, margin: `0px` };

  return <h1 style={headingStyle}>{text}</h1>;
};

const Description = ({ fontStyle }) => {
  const descriptionStyle = { fontStyle };
  const YOUR_NAME = prompt("Enter your name");

  return (
    <h2 style={descriptionStyle}>{YOUR_NAME}'s first React application.</h2>
  );
};

function App() {
  return (
    <>
      <Heading color="crimson" text="Hello, world!" />
      <Description fontStyle="italic" />
    </>
  );
}

export default App;
