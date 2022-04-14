import React, { FC, ReactNode } from "react"
import ReactDOM from "react-dom"

interface PortalProps {
  children: ReactNode,
  parent?: ChildNode,
  className?: string
}

const Portal:FC<PortalProps> = ({ children, parent, className }) => {
  const el = React.useMemo(() => document.createElement("div"), [])

  React.useEffect(() => {
    const target = parent ? parent : document.body
    const classList = ["portal-container"]

    if (className) className.split(" ").forEach((item:any) => classList.push(item))
    classList.forEach(item => el.classList.add(item))
    target.appendChild(el)
    return () => {
      target.removeChild(el)
    }
  }, [el, parent, className])
  return ReactDOM.createPortal(children, el)
}

export default Portal