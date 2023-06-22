import { useState } from 'react'

import Tabs from './components/Tabs'
import { DataProvider } from './dataContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <DataProvider>
<Tabs />        
</DataProvider>
      </div>
    
    </>
  )
}

export default App
