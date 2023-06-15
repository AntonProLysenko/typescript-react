//Event as props

type buttonProps={
    /**Here in argument props we can define a specific Element as <HTMLButtonElement> */
    handleClick:(evt:React.MouseEvent<HTMLElement>,id:number)=>void
}

export default function Button({handleClick}:buttonProps) {
  return (
    <button onClick={(evt)=>handleClick(evt,1)}>Button</button>
  )
}
