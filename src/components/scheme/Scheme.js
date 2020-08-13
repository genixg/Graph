// import {createScheme} from '@/components/scheme/scheme.template'
import {GraphComponent} from '@core/GraphComponent'
import {shouldDrag} from '@/components/scheme/scheme.functions'
import {dragHandler} from '@/components/scheme/scheme.drag'

export class Scheme extends GraphComponent {
  static className = 'scheme'
  constructor($root, options) {
    super($root, {
      listeners: ['mousedown']
    })
    this.buttons = options.buttons || []
    this.level_in = options.level_in || 0
    this.top = options.top || 0
    this.left = options.left || 0
    this.phrase = options.phrase || ''
    this.text_ru = options.text_ru || ''
    this.exec_func_name = options.exec_func_name || ''
  }

  onMousedown(event) {
    if (shouldDrag(event)) {
      dragHandler(this.$root, event)
    }
  }

  init() {
    super.init()

    console.log('scheme init', this.$root)
  }
  // $('<div class="scheme"></div>')
  // this.$el.attr('data-level', this.level_in)

  // const buttonsHTML = this.buttons
  //     .map((button) => {
  //       return `<div class="button cols${button.cols} rows${button.rows}">${button.text_ru}</div>`
  //     })
  //     .join('')

  // this.$el.html(`<h4>${this.phrase}</h4>
  //          <div class="text_ru" contenteditable>${this.text_ru}</div>
  //        ` + (this.exec_func_name ? `<div class="exec_func_name">${this.exec_func_name}</div>` : '') + `
  //        <div class="buttons">${buttonsHTML}</div>`)
  // this.$el.draggable()
  //
  // $root.append(this.$el)


  toHTML() {
    const buttonsHTML = this.buttons
        .map((button) => {
          return `<div class="button cols${button.cols} rows${button.rows}">${button.text_ru}</div>`
        })
        .join('')
    return `
                <h4 data-drag="true">${this.phrase}</h4>
                <div class="text_ru" contenteditable>${this.text_ru}</div>
         ` + (this.exec_func_name ? `<div class="exec_func_name">${this.exec_func_name}</div>` : '') + `
                <div class="buttons">${buttonsHTML}</div>
            `
  }
}
