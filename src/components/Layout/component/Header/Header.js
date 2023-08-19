import style from './Header.module.scss'
import clsx from 'clsx'
import { logo } from '../../../../assets/imgs'
import Tippy from '@tippyjs/react/headless'

import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const classWrap = clsx(style.wrap)
  const classInner = clsx(style.inner)
  const classSearch = clsx(style.search)
  const classAction = clsx(style.action)
  const classClear = clsx(style.clear)
  const classLoad = clsx(style.load)
  const classBtnSearch = clsx(style.btnSearch)
  return (
    <header className={classWrap}>
      <div className={classInner}>
        <img src={logo} alt="tiktok" />
        <div className={classSearch}>
          <input placeholder="Search cmm di ..." />
          <button className={classClear}>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
          <FontAwesomeIcon className={classLoad} icon={faCircleNotch} />
          <button className={classBtnSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={classAction}>ss</div>
      </div>
    </header>
  )
}

export default Header
