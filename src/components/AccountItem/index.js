import clsx from 'clsx'
import style from './AccountItem.module.scss'

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AccountItem() {
  const classAccountSearch = clsx(style.accountSearch)
  const classIcon = clsx(style.icon)
  const classInfoAccountSearch = clsx(style.infoAccountSearch)
  return (
    <>
      <div className={classAccountSearch}>
        <img
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f267c7636f5011a978c5c5999f347153~c5_100x100.jpeg?x-expires=1692518400&x-signature=Ya%2FuU0h50kUGBGyw78SDG7VNEHQ%3D"
          alt="anh"
        />
        <div className={classInfoAccountSearch}>
          <h5>
            baomatnick
            <FontAwesomeIcon className={classIcon} icon={faCheckCircle} />
          </h5>
          <p>Hoang Cuu Bao</p>
        </div>
      </div>
    </>
  )
}

export default AccountItem
