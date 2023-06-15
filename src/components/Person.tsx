/**Object Props*/

type PersonName={
    name:{
        first:string
        last:string
    }
}

export default function Person({name}:PersonName) {
  return (
    <div>{name.first} {name.last}</div>
  )
}
