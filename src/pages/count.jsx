import { observer } from 'mobx-react-lite'
import counter from '../stores/counterStore'
function Count() {
  return (
    <div>
      <div>
        <button onClick={counter.sub}>-</button>
        <span>{counter.count}</span>
        <button onClick={counter.add}>+</button>
      </div>
      <h1>{counter.recordCountState}</h1>
    </div>
  )
}

export default observer(Count)
