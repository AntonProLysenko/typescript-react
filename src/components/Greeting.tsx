/**Regular props */
import { Name } from "./Types/Person-types";


type GreetProps={
    name:Name |null//since user can be null or inherit types from Name Type
    messageCounter?:number//optional props //optional, we are not passing it in props currently, but have default value as an arg
    isLoggedIn:boolean
}

export default function Greeting({name, messageCounter=0, isLoggedIn}:GreetProps) {

  console.log(isLoggedIn);
  
  return (
    <div>
        <h2>
        {isLoggedIn
        ?`Welcome ${name?.first}! You have ${messageCounter} unread messages`
        :`Please Log in`}
        </h2>
    </div>
  )
}