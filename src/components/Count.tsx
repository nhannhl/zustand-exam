import React from 'react'
import { useCountStore } from '../stores';

const Count: React.FC = () => {
  const countStore = useCountStore();

  return (
    <div>
      <h3>Count</h3>
      <p>Count: {countStore.count}</p>
      <button onClick={() => countStore.increment(1)}>Increment 1</button>
      <button onClick={() => countStore.increment(3)}>Increment 3</button>
      <button onClick={() => countStore.decrement(1)}>Decrement 1</button>
      <button onClick={() => countStore.decrement(3)}>Decrement 3</button>
      <button onClick={() => countStore.reset()}>Reset</button>
      <button onClick={() => countStore.showUser()}>Show User</button>
    </div>
  )
}

export default Count;