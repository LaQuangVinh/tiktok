import style from './header.module.scss'
import clsx from 'clsx'

export default function Header() {
  const className = clsx(style.content, 'bg-success', 'container')
  return (
    <header className="container-fluid border-bottom">
      <div className={className}></div>
    </header>
  )
}
