import {GraphComponent} from '@core/GraphComponent'

export class Header extends GraphComponent {
  static className = 'graphic__header'

  toHTML() {
    return `
        <input class="input" type="text" value="Новая схема">

        <div>
            <div class="button"><span class="material-icons">exit_to_app</span></div>
            <div class="button"><span class="material-icons">delete</span></div>
        </div>`
  }
}

