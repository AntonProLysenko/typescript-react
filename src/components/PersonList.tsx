//Array Props

type NameList = {
    names:{
        first:string
        last:string
    }[]
}

export default function PersonList({names}:NameList) {
  return (
    <div>
        {names.map((name)=>{
            return <h2 key={name.last}>{`${name.first} ${name.last}`}</h2>
        })}
    </div>
  )
}
