// import {$} from '@core/Dom'

export function dragHandler($root, event) {
  // const $dragtarget = $(event.target)
  const coords = $root.getCoords()
  const parentCoords = $root.parent().getCoords()
  // const type = $resizer.data.resize
  // const sideProp = type === 'col' ? 'bottom' : 'right'
  // let value

  $root.css({
    opacity: 0.5
  })

  document.onmousemove = e => {
    const deltaX = e.pageX - event.pageX
    const deltaY = e.pageY - event.pageY
    $root.css({left: (coords.x + deltaX) + 'px', top: (deltaY + coords.y - parentCoords.top) + 'px'})
  }

  document.onmouseup = (e) => {
    document.onmousemove = null
    document.onmouseup = null

    $root.css({
      opacity: 1
    })
  }
}
