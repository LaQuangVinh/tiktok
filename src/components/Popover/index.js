import { Popover } from 'react-bootstrap'

function PopoverList({ children }) {
  return (
    <Popover id="popover-trigger-focus" title="Popover bottom">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  )
}

export default PopoverList
