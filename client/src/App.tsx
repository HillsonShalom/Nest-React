import './App.css'
import Center from './components/Center'
import NavBar from './components/NavBar'
import TopBar from './components/TopBar'

function App() {

  return (
    <>
      <TopBar/>
      <div id='app'>
        <NavBar/>
        <Center/>
      </div>
      
    </>
  )
}

export default App
