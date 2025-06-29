import React, { useState } from 'react'
import RadialOrbitDiagram from './components/RadialOrbitDiagram'
import LayeredBlockDiagram from './components/LayeredBlockDiagram'
import ToggleDiagramView from './components/ToggleDiagramView'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [view, setView] = useState<'radial' | 'layered'>('radial')

return (
  <div className="h-screen w-screen bg-white dark:bg-gray-900 text-black dark:text-white">
    <div className="absolute top-4 left-4 z-10">
      <DarkModeToggle />
      <ToggleDiagramView view={view} setView={setView} />
    </div>
    <div className="h-full w-full" >
      {view === 'radial' ? <RadialOrbitDiagram /> : <LayeredBlockDiagram />}
    </div>
  </div>
)
}

export default App
