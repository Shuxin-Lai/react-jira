import { useCallback } from "react"

function App() {
  const handleClick = useCallback(() => {
    alert("ok")
  }, [])

  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default App
