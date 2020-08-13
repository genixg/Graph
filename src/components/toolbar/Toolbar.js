import {GraphComponent} from '@core/GraphComponent'

export class Toolbar extends GraphComponent {
  static className = 'graphic__toolbar'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }

  onClick(event) {
    console.log(event.target)
  }

  toHTML() {
    return `<div class="button"><span class="material-icons">format_align_left</span></div>
            <div class="button"><span class="material-icons">format_align_right</span></div>
            <div class="button"><span class="material-icons">format_align_center</span></div>
            <div class="button"><span class="material-icons">format_bold</span></div>
            <div class="button"><span class="material-icons">format_italic</span></div>
            <div class="button"><span class="material-icons">format_underlined</span></div>`
  }
}
