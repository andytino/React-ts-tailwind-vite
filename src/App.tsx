import '@/App.css'
import MainRoute from './routes'

function App() {
  const isAdmin = true

  return (
    <div className="App">
      <MainRoute isAdmin={isAdmin} />
    </div>
  )
}

export default App
