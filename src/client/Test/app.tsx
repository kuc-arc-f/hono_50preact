import { useState } from 'preact/hooks'
import Head from '../../components/Head';

//
const dataItems: any[] = [
  {id:1, title: "title_1"},
  {id:2, title: "title_2"},
  {id:3, title: "title_3"},
];
let items: any[] = [];
//
export function App() {
  const [count, setCount] = useState(0);  
  const [updatetime, setUpdatetime] = useState("");
  //
  const testProc = function(){
    items = dataItems;
    setUpdatetime(new Date().toString());
 }
  //
  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <div>
        <Head />
      </div>
      <h1 class="text-4xl font-bold">Test</h1>
      <hr />
      <div class="card">
        <button class="btn-purple" onClick={() => testProc()}>Test
        </button>
      </div>
      <hr />
      {items.map((item: any) => {
        return (
        <li key={item.id}>
          <h3 className="text-3xl font-bold">{item.title}</h3>
          <span>id: {item.id}</span>
        </li>
        );
      })}
    </div>
  )
}
/*
<a href="/">[ home ]</a>
<hr />
*/