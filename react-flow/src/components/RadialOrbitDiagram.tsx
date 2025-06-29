import React from 'react'
import ReactFlow, { Background, Controls, Node } from 'reactflow'
import 'reactflow/dist/style.css'
import { equilibriumStack } from '../data/equilibriumStack'

const radialLayout = (nodes: any[]) => {
  const radius = 250
  const centerX = 400
  const centerY = 300
  const angleStep = (2 * Math.PI) / nodes.length

  return nodes.map((n, i) => ({
    id: n.id,
    data: { label: `${n.icon} ${n.label}` },
    position: {
      x: centerX + radius * Math.cos(i * angleStep),
      y: centerY + radius * Math.sin(i * angleStep),
    },
  }))
}

const RadialOrbitDiagram = () => {
  const nodes: Node[] = radialLayout(equilibriumStack)
  return (
    // TODO: fix the width and height to fit the radial layout
    <div className="w-full h-full" style={{width:'1200px', height:'1200px'}}>
      <ReactFlow nodes={nodes} edges={[]} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default RadialOrbitDiagram
// radial diagram here