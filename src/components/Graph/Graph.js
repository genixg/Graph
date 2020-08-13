import {$} from '@core/Dom'
// import {Scheme} from '@/components/scheme/Scheme'

export class Graph {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
    this.schemes = options.schemes || []
  }

  getRoot() {
    const $root = $.create('div', 'graphic')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, this)
      // // DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
      if (component.isComplex()) {
        $el.append(component.getRoot())
      } else {
        $el.html(component.toHTML())
      }
      $root.append($el)
      return component
    })

    // // const $canvas = $.create('div', Scheme.className)
    // this.schemes = this.schemes.map(options => {
    //   const $el = $.create('div', Scheme.className)
    //   const scheme = new Scheme($el, options)
    //   $el.html(scheme.toHTML())
    //   $root.append($el)
    //   return scheme
    // })


    return $root
  }


  render() {
    this.$el.append(this.getRoot())

    this.components.forEach(component => component.init())
    // this.schemes.forEach(component => component.init())
  }
}
