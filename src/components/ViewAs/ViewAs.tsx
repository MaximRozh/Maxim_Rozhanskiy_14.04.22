import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import style from './viewAs.module.scss'

interface viewAsProps {
    viewAs:boolean,
    handleChangeView: (view: boolean) => void
}

const ViewAs:FC<viewAsProps> = ({viewAs, handleChangeView}) => {
    return (
        <div className={style.viewAs}>
                <span className={style.text}>view as</span>
                <AppstoreOutlined
                  onClick={() => handleChangeView(false)}
                  className={`${style.icon} ${viewAs ?  "" : style.active }`}
                  style={{ fontSize: "35px", color: "#F5887F" }}
                />
                <BarsOutlined
                  onClick={() => handleChangeView(true)}
                  className={`${style.icon} ${viewAs ? style.active : "" }`}
                  style={{ fontSize: "35px", color: "#F5887F" }}
                />
              </div>
    )
}

export default ViewAs