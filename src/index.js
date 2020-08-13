import './module'
import './scss/index.scss'

import {Graph} from '@/components/graph/Graph'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Canvas} from '@/components/canvas/Canvas'


const graph = new Graph('#app', {
  components: [Header, Toolbar, Canvas],
  schemes: window.allschemes
})

graph.render()
