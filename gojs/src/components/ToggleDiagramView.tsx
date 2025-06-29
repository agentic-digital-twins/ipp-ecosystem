import React from 'react'

interface ToggleProps {
  view: 'radial' | 'layered'
  setView: (view: 'radial' | 'layered') => void
}

const ToggleDiagramView = ({ view, setView }: ToggleProps) => (
  <div className="flex gap-2 mb-4">
    <button
      onClick={() => setView('layered')}
      className={`px-4 py-1 rounded ${view === 'layered' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
    >
      🧱 Layered View
    </button>
  </div>
)

export default ToggleDiagramView
