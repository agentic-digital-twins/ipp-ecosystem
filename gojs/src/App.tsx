import React, { useState } from 'react'
import LayeredBlockDiagram from './components/LayeredBlockDiagram'
import ToggleDiagramView from './components/ToggleDiagramView'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [view, setView] = useState<'radial' | 'layered'>('layered')

  return (
    <div className="h-screen w-screen p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <DarkModeToggle />
      <ToggleDiagramView view={view} setView={setView} />
      {view === 'layered' ?  <LayeredBlockDiagram /> : null}
    </div>
  )
}

export default App
