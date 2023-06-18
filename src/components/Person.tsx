/**Object Props*/

import { PersonProps } from "./Types/Person-types"

// type PersonName={
//     name:{
//         first:string
//         last:string
//     }
// }

export default function Person({name}:PersonProps) {
  return (
    <div>{name.first} {name.last}</div>
  )
}
