import { increment, decrement } from '@/store/slices/counterSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { RootState } from '@/types/store';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment(2))}>Increment</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement</button>
    </div>
  );
}
