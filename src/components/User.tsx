import React, { useEffect } from 'react'
import { useCountStore, useUserStore } from '../stores';

const User: React.FC = () => {
  const countStore = useCountStore();
  const userStore = useUserStore();

  useEffect(() => {
    countStore.increment(5);

    return () => {
      countStore.decrement(5);
    }
  }, []);

  return (
    <div>
      <h3>User</h3>
      <p>Count: {countStore.count}</p>
      <p>User: {userStore.auth.current?.userName}</p>
      <button onClick={() => userStore.setAuth({current: {userName: 'test', userId: 'test', role: 'test'}, token: 'test'})}>Set Auth</button>
      <button onClick={() => userStore.reset()}>Reset</button>
    </div>
  )
}

export default User;