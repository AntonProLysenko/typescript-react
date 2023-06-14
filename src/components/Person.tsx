/**Object Props*/

type PersonName={
    name:{
        first:string
        last:string
    }
}

export default function Person({name}:PersonName) {

    console.log(name.first);
    
  return (
    <div>{name.first} {name.last}</div>
  )
}
