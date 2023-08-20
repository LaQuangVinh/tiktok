import Button from '../Button'
import clsx from 'clsx'
import style from './Menu.module.scss'

function MenuItem({ data }) {
  const classItem = clsx(style.item)
  return (
    <Button className={classItem} to={data.to} leftIcon={data.icon}>
      {data.title}
    </Button>
  )
}

export default MenuItem
