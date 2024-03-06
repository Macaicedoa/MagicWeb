import { useUserStates } from "./hooks/useUserStates"
import Home from "./pages/Home"

function App() {

  const {states,callbacks,numberOfCartItems,numberOfNotifications} = useUserStates()

  return (
    <>
      <Home  states={states} callbacks={callbacks} numberOfCartItems={numberOfCartItems} numberOfNotifications={numberOfNotifications}/>
    </>
  )
}

export default App
