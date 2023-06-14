/**Regular props */



type GreetProps={
    name:string
    messageCounter?:number//optional props
    isLoggedIn?:boolean//optional, we are not passing it in props currently, but have default value as an arg
}

export default function Greeting({name, messageCounter=0, isLoggedIn=true}:GreetProps) {
  return (
    <div>
        <h2>
        {isLoggedIn
        ?`Welcome ${name}! You have ${messageCounter} unread messages`
        :`Please Log in`}
        </h2>
    </div>
  )
}