import { useSelector, useDispatch } from "react-redux"
import { RootState } from "./store"
import { increment } from "./store/features/counterSlice"

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>count: {count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
    </div>
  )
}

export default App
