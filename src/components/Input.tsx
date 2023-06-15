type InputProps={
    value:string,
    handleChange:(evt:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Input({value,handleChange}:InputProps) {
  return (
  <input type="text" value={value} onChange={handleChange}/>
  )
}
