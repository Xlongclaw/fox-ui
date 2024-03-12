import React from 'react'
import './styles.css'
import ReactDOM from 'react-dom/client'
import RootRouter from './routers/root-router'

const App : React.FC = () => {
  return <RootRouter/>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)