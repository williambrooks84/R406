import './App.css'
import Card from './components/Card.jsx'
import icon from './assets/icon.webp'

let gary = {
  icon: icon,
  name: "Gary DO",
  mail: "gary.do@but1.mmi",
  description: "Lorem ipsum dolor sit amien. Lorem Ipsum dolor sit amien.",
  medias: [
    {name: "Instagram", url: "https://www.instagram.com/"},
    {name: "GitHub", url: "https://github.com"},
    {name: "Meta", url: "https://www.meta.com/"}
  ]
}

function App() {
  return (
    <>
      <Card user={gary}/>
    </>
  )
}

export default App;