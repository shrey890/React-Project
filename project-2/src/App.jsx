import './App.css'
import ContactForm from './components/ContactForm'
import ContactHeader from './components/ContactHeader'
import Nav from './components/Nav'

function App() {
  return (
    <div className='container mx-auto px-4  '>
      <Nav />
      <ContactHeader/>
      <ContactForm/>
    </div>
  )
}

export default App
