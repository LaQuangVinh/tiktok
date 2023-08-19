import Header from '../component/Header/Header'
import SideBar from './SideBar'
import style from './DefaultLayout.module.scss'
import clsx from 'clsx'

function DefaultLayout({ children }) {
  const classWrap = clsx(style.wrap)
  const classContainer = clsx(style.container)
  const classContent = clsx(style.content)
  return (
    <div className={classWrap}>
      <Header />
      <div className={classContainer}>
        <SideBar />
        <div className={classContent}>{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
