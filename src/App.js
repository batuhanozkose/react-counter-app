import { useState } from 'react'
import './index.css'

function App() {

  const [sayi, setSayi] = useState(0);

  function arttir() {
    setSayi(sayi + 1);
  }

  function azalt() {
    setSayi(sayi - 1);
  }

  function reset() {
    setSayi(sayi === 0);
    alert("Sayı sıfırlandı!");
  }

  return (
    <div>
      <h1 className='text-9xl text-center p-8 font-bold'>{sayi}</h1>
      <div className="flex justify-center p-2">
      <button onClick={arttir} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Arttır</button>
      </div>
      <div className="flex justify-center p-2">
      <button onClick={azalt} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Azalt</button>
      </div>
      <div className="flex justify-center p-2">
      <button onClick={reset} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sıfırla</button>
      </div>
    </div>
  )
}

export default App    