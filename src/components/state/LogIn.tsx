import { Name } from "../Types/Person-types"

type LoginProps = {
   //React declares type by itself in states if we are passing the default value
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>//I took the type from the declaration on the usestate
    isLoggedIn:boolean
    setUser:React.Dispatch<React.SetStateAction<Name | null>>
}


export default function LogIn({setIsLoggedIn, isLoggedIn, setUser}:LoginProps) {
    const handleLogin = ()=>{
        setIsLoggedIn(true)
        setUser({
            first:"Anton",
            last:"Lysenko"
        })
    }
    const handleLogout = ()=>{
        setIsLoggedIn(false)
        setUser(null)
    }
  return (
    <div>
        {isLoggedIn? <button onClick={handleLogout}>Log-out</button>
        :<button onClick={handleLogin}>Log-in</button>}
    </div>
  )
}
