import './App.css'
import { Karma } from './components/Karma'
import { Supervisor } from './components/Supervisor'
import { TeamBuilder } from './components/TeamBuilder'
import { Calculator } from './components/Calculator'
import { Principal } from './components/Principal'

function App() {

  return (
    <div className='flex flex-col justify-center items-center font-poppins gap-8
    xl:grid grid-cols-5 xl:grid-rows-3 xl:place-items-center'>
      <Principal />
      <Supervisor />
      <TeamBuilder />
      <Karma />
      <Calculator />
    </div>
  )
}

export default App
