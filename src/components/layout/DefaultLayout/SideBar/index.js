import style from './sidebar.module.scss'
import clsx from 'clsx'

export default function SideBar() {
  const className = clsx(style.content)
  return (
    <aside className="col-xxl-3 bg-danger">
      <div className={className}></div>
    </aside>
  )
}
