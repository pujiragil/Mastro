import "../styles/Component.scss"
import { Fragment } from "react"

const BaseComponent = () => {

  const myAlert = () => {
    alert("Hello from component layout 👋")
  }

  return (
    <Fragment>
      <p>Component Layout</p>
      <a href="/">Go to the home page</a>
      <button className="btn--component" onClick={myAlert}>Click Button</button>
    </Fragment>
  )
}

export default BaseComponent