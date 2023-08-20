import clsx from 'clsx'
import style from './Popover.module.scss'

function Popover({ children, className }) {
  const classWrap = clsx(style.wrap, {
    [className]: className
  })
  return <div className={classWrap}>{children}</div>
}

export default Popover
