import style from './Header.module.scss'
import clsx from 'clsx'
import { logo } from '../../../../assets/imgs'
import Tippy from '@tippyjs/react/headless'
import Popover from '../../../Popover'
import AccountItem from '../../../AccountItem'
import { useState } from 'react'
import Menu from '../../../Menu'

import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../Button'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const classWrap = clsx(style.wrap)
  const classInner = clsx(style.inner)
  const classSearch = clsx(style.search)
  const classAction = clsx(style.action)
  const classClear = clsx(style.clear)
  const classLoad = clsx(style.load)
  const classBtnSearch = clsx(style.btnSearch)
  const classSearchResult = clsx(style.searchResult)
  const classHeadingSearch = clsx(style.headingSearch)
  const classBtnMore = clsx(style.btnMore)

  const [searchResult, setsearchResult] = useState([])

  const menuAction = [
    {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: 'English'
    },
    {
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
      title: 'Feedback cho t',
      to: '/feedback'
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts'
    }
  ]

  return (
    <header className={classWrap}>
      <div className={classInner}>
        <img src={logo} alt="tiktok" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={attrs => (
            <div {...attrs} tabIndex="-1" className={classSearchResult}>
              <Popover>
                <h5 className={classHeadingSearch}>Accounts</h5>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Popover>
            </div>
          )}
        >
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
        </Tippy>
        <div className={classAction}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
          <Menu items={menuAction}>
            <button className={classBtnMore}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
