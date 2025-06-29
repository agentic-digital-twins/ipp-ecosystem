import React, { useEffect, useRef } from 'react'
import * as go from 'gojs'
import { equilibriumStack } from '../data/equilibriumStack'

const LayeredBlockDiagram = () => {
  const diagramRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const $ = go.GraphObject.make
    const diagram = $(go.Diagram, diagramRef.current!, {
      layout: $(go.LayeredDigraphLayout),
      'undoManager.isEnabled': true
    })

    diagram.nodeTemplate = $(
      go.Node,
      'Auto',
      $(go.Shape, 'Rectangle', { fill: 'lightgreen', stroke: null }),
      $(go.TextBlock, { margin: 6 }, new go.Binding('text', 'label'))
    )

    const nodeDataArray = equilibriumStack.map((n) => ({
      key: n.id,
      label: `${n.icon} ${n.label}`
    }))

    const linkDataArray = nodeDataArray.map((node, i) => ({
      from: nodeDataArray[i].key,
      to: nodeDataArray[(i + 1) % nodeDataArray.length].key
    }))

    diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
        // Cleanup: remove diagram on unmount
    return () => {
      diagram.div = null
    }
  }, [])

  return <div ref={diagramRef} className="w-full h-full bg-white dark:bg-gray-900" />
}

export default LayeredBlockDiagram
