/**React Component as a children Props */

type OscarProps={
children: React.ReactNode//declaring type of react component
}

export default function Oscar(props:OscarProps) {
  return (
    <div>
        {props.children}
    </div>
  )
    // <div>Oscar Goes To Dicaprio</div>
}