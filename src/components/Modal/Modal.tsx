import React, { FC, ReactNode, useEffect, useRef, useState } from "react"
import cx from "classnames"

import styles from "./modal.module.scss"
import { CloseOutlined } from "@ant-design/icons"
import Portal from "./Portal"

interface ModalProp {
  open: boolean,
  handleClose: () => void,
  children: ReactNode,
  className?: string
}

const Modal:FC<ModalProp> = ({ open, handleClose, children, className }) => {
  const [active, setActive] = useState(false)
  const backdrop = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const { current } = backdrop

    const transitionEnd = () => setActive(open)

    const keyHandler = (e:any )=> [27].indexOf(e.which) >= 0 && handleClose()

    const clickHandler = (e:any ) => e.target === current && handleClose()

    if (current) {
      current.addEventListener("transitionend", transitionEnd)
      current.addEventListener("click", clickHandler)
      window.addEventListener("keyup", keyHandler)
    }

    if (open) {
      window.setTimeout(() => {
        (document.activeElement as HTMLElement).blur();
        setActive(open)

        const root = document.getElementById("root") as HTMLElement
        root.setAttribute("inert", "true")

      }, 10)
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd)
        current.removeEventListener("click", clickHandler)
      }

      const root = document.getElementById("root") as HTMLElement
      root.removeAttribute("inert")
      window.removeEventListener("keyup", keyHandler)
    }
  }, [open, handleClose, backdrop])

  return (
    <>
      {(open || active) && (
        <Portal>
          <div
            className={cx(styles.modal, active && open && styles.active)}
            ref={backdrop}
          >
            <div className={cx(styles.modalContent, className)}>
              <div className={styles.modalContentClose}>
                <CloseOutlined onClick={handleClose} className={styles.modalClose} />
              </div>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default Modal
