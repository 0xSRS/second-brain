import Button from "./components/Button"
import LoginIcon from "./icons/LoginIcon"
import SignUpIcon from "./icons/SignUpIcon"


const App = () => {
  return (
    <div>
      <Button text="Login" varient="primary" startIcon={<LoginIcon/>}/>
      <Button text="Sign Up" varient="secondary" startIcon={<SignUpIcon/>}/>
    </div>
  )
}

export default App