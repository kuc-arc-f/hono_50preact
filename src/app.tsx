import { useState } from 'preact/hooks'
//
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">[img viteLogo]
        </a>
        <a href="https://preactjs.com" target="_blank">[img preactLogo]
        </a>
      </div>
      <h1 class="text-4xl font-bold">Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          [ count ]  is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
