import SideBar from './SideBar'
import Header from '../component/Header'
import clsx from 'clsx'

export default function DefaultLayout({ children }) {
  const className = clsx('col-xxl-9')
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="container bg-info">
          <div className="row">
            <SideBar />
            <div className={className}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
