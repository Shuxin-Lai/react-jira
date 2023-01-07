import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

export function DefaultLayout(props: PropsWithChildren) {
  return (
    <div>
      <Link to={{ pathname: "/" }}>Home</Link>
      <Link to={{ pathname: "/profile" }}>Profile</Link>
      {props.children}
    </div>
  )
}
