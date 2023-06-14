type StatusProps = {
    status:"loading"| "success" | "error"
}

export default function Status({status}:StatusProps) {
let msg
status=="loading"?msg="Loading...":
status=="success"? msg="Fetched Successully":
status=="error"?msg="Error!":
msg = ""
  return (
    <div>
        <h2>{msg}</h2>
    </div>
  )
}
