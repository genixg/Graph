import {$} from '@core/Dom'
import {createCanvas} from '@/components/canvas/canvas.template'
import {GraphComponent} from '@core/GraphComponent'
import {Scheme} from '@/components/scheme/Scheme'
// import {$} from '@core/Dom'

export class Canvas extends GraphComponent {
  static className = 'graphic__canvas'

  constructor($root, parentGraph) {
    super($root, {
      // listeners: ['mousedown']
    })

    this.schemes = parentGraph.schemes.map(options => {
      const $schemeel = $.create('div', Scheme.className)
      const scheme = new Scheme($schemeel, options)
      $schemeel.html(scheme.toHTML())
      this.$root.append($schemeel)
      return scheme
    })
  }

  init() {
    super.init()

    this.schemes.forEach(scheme => scheme.init())
  }

  isComplex() {
    return true
  }

  // onMousedown(event) {
  //   console.log('Canvas mousedown event')
  // }

  getRoot() {
    return this.$el
  }

  toHTML() {
    console.log('canvas toHTML', this)
    return createCanvas() + this.schemes.map(scheme => scheme.toHTML()).join('')
    // return createCanvas()
    // + this.$el.toHTML()
  }
}
