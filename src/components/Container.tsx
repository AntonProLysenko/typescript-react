/**Styles As Props */


type ContProps={
    styles: React.CSSProperties
}

export default function Container({styles}:ContProps) {

    console.log(styles);
    
  return (
    <div style = {styles}>
        Container-Content goes here
    </div>
  )
}
