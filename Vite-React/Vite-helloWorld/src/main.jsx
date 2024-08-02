import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* creating own fun and div */
function MyAPP(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <MyAPP/>
  /* <React.StrictMode>
    
    <myAPP/>
  </React.StrictMode>, */
)
