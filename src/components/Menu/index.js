import clsx from 'clsx'
import style from './Menu.module.scss'
import Tippy from '@tippyjs/react/headless'
import Popover from '../Popover'
import MenuItem from './MenuItem'

function Menu({ children, items = [] }) {
  const classMenu = clsx(style.menu)
  const classMenuPopover = clsx(style.menuPopover)

  const renderItem = function () {
    return items.map((item, index) => <MenuItem key={index} data={item} />)
  }

  return (
    <Tippy
      interactive
      placement="bottom-end"
      delay={[200, 700]}
      render={attrs => (
        <div {...attrs} tabIndex="-1" className={classMenu}>
          <Popover className={classMenuPopover}>{renderItem()}</Popover>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
