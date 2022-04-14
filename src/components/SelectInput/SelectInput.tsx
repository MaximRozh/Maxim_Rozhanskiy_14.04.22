import { Select } from 'antd'
import React, { FC } from 'react'
import style from './SelectInput.module.scss'

interface SelectInputProps {
  selectedGenre: string,
  genres: string[],
  handleChangeGanre: (genre:string) => void,
}

const SelectInput:FC<SelectInputProps> = ({selectedGenre, handleChangeGanre, genres}) => {
    return (
        <div className={style.selectGenre}>
                <Select
                  allowClear
                  placeholder="Select Genre"
                  value={selectedGenre}
                  onChange={handleChangeGanre}
                  style={{ width: "100%" }}
                >
                  {genres.map((item: string) => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </div>
    )
}
export default SelectInput
