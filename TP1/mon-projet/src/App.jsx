import './App.css'
import Card from './components/Card.jsx'
import icon from './assets/icon.webp'
import icon2 from './assets/icon2.webp'
import Header from './components/Header.jsx'

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

let bill={
  icon: icon2,
  name: "Bill DO",
  mail: "bill.do@but1.mmi",
  description: "Lorem ipsum dolor sit amien. Lorem Ipsum dolor sit amien. Lorem Ipsum dolor sit amien.",
  medias: [
    {name: "Instagram", url: "https://www.instagram.com/"},
    {name: "GitHub", url: "https://github.com"},
    {name: "Meta", url: "https://www.meta.com/"}
  ]
}

function App() {
  return (
    <div className="gap-10">
      <Header />
      <div className="flex flex-row justify-center gap-10">
        <Card user={gary}/>
        <Card user={bill}/>
      </div>
    </div>
  )
}

export default App;