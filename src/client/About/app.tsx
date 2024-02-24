import { useState } from 'preact/hooks'
import Head from '../../components/Head';
//
export function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <Head />
      <div>
      </div>
      <h1 class="text-4xl font-bold">About</h1>
      <hr />
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          [ count ]  is {count}
        </button>
      </div>
      <hr />
    </div>
  )
}
/*
<a href="/">[ home ]</a>
<hr />
*/