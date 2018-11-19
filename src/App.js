import React from 'react'

import DisplayMyName from './DisplayMyName'
import DisplayName from './DisplayName'

const name = "Galancior"

const App = () => (
  <div>
  <h1>Hello world!</h1>
  <DisplayMyName />
  <DisplayName
    name = {name}
    />
  </div>
)

export default App