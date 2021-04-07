// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const Globe = React.lazy(import(/* webpackPrefetch: true */ /* webpackChunkName: "globe" */ '../globe'))


function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          padding: '2rem',
        }}
      >
        <label style={{marginBottom: '1rem'}}>
          <input
            type="checkbox"
            checked={showGlobe}
            onChange={e => setShowGlobe(e.target.checked)}
          />
          {' show globe'}
        </label>
        <div style={{width: 400, height: 400}}>
          {showGlobe ? <Globe /> : null}
        </div>
      </div>
    </React.Suspense>
  )
}

export default App
