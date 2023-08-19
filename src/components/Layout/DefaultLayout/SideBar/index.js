import style from './SideBar.module.scss'
import clsx from 'clsx'

function SideBar() {
  const classWrap = clsx(style.wrap)

  return (
    <aside className={classWrap}>
      <h2>sidebaar</h2>
    </aside>
  )
}

export default SideBar
