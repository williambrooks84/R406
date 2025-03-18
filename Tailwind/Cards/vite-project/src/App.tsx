import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Card badgeStyle={{variant: "default", size:"lg", border: false}} badgeData={{children: "3"}}></Card>
      <Card badgeStyle={{variant: "primary", size:"md", border: true}} badgeData={{children: "1"}}></Card>
    </div>
  );
}

export default App;