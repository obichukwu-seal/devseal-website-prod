import React, { HTMLAttributes } from 'react'

type BoxProp = HTMLAttributes<HTMLDivElement>
type Props = BoxProp & {}

const Center = ({className, ...props}: Props) => {
  return (
    <span className={`${className} items-center w-full justify-center flex`} {...props}/>
  )
}

export default Center