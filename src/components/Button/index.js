import clsx from 'clsx'
import style from './Button.module.scss'
import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  href,
  outline,
  small,
  large,
  primary,
  text,
  round,
  disable,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...props
}) {
  //Add class vào component
  const classWrap = clsx(style.wrap, {
    [className]: className,
    [style.primary]: primary,
    [style.outline]: outline,
    [style.small]: small,
    [style.large]: large,
    [style.text]: text,
    [style.round]: round,
    [style.disable]: disable
  })

  //Attributes của Components
  const action = {
    onClick,
    ...props
  }

  //Loại bỏ sự kiện
  if (disable) {
    Object.keys(action).forEach(key => {
      if (key.startsWith('on') && typeof action[key] === 'function') {
        delete action[key]
      }
    })
  }

  let Component = 'button'

  //Xử lí loại button
  if (to) {
    Component = Link
    action.to = to
  } else if (href) {
    Component = 'a'
    action.href = href
  }

  const classChildren = clsx(style.title)
  const classIcon = clsx(style.icon)
  return (
    <Component className={classWrap} {...action}>
      {leftIcon && <span className={classIcon}>{leftIcon}</span>}
      <span className={classChildren}>{children}</span>
      {rightIcon && <span className={classIcon}>{rightIcon}</span>}
    </Component>
  )
}

export default Button
