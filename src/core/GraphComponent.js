import {DomListener} from '@core/DomListener'

export class GraphComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''

    this.prepare()
  }

  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // If component is complex, it needs a method getRoot()
  isComplex() {
    return false
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
