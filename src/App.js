import './App.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Academics from "./Academics.js"
import Miners from "./Miners"

function App() {
  const cards = Academics.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          
          <section className="cards--list">
              {cards}
          </section>
      </div>
  )
}




export default App;
