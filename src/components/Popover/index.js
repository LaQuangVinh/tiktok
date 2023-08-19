import clsx from 'clsx'
import style from './Popover.module.scss'

function Popover({ children }) {
  const classWrap = clsx(style.wrap)
  return <div className={classWrap}>{children}</div>
}

export default Popover
