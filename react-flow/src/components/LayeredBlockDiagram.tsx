import React from 'react'
import ReactFlow, { Background, Controls, Node } from 'reactflow'
import 'reactflow/dist/style.css'
import { equilibriumStack } from '../data/equilibriumStack'

const layeredLayout = (nodes: any[]) => {
  const layerMap: Record<string, number> = {}
  let layerIndex = 0
  nodes.forEach((n) => {
    if (!(n.layer in layerMap)) {
      layerMap[n.layer] = layerIndex++
    }
  })

  return nodes.map((n, i) => ({
    id: n.id,
    data: { label: `${n.icon} ${n.label}` },
    position: {
      x: 100 + (i % 3) * 250,
      y: 100 + layerMap[n.layer] * 120,
    },
  }))
}

const LayeredBlockDiagram = () => {
  const nodes: Node[] = layeredLayout(equilibriumStack)
  return (
    <div className="w-full h-full" style={{width:'1200px', height:'1200px'}}>
      <ReactFlow nodes={nodes} edges={[]} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default LayeredBlockDiagram
