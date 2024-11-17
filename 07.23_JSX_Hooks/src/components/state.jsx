import { useEffect, useState } from 'react'

export default function StateComp() {

    // useState merupakan HOOK yang hanya sebagai penyimpanan (variabel)
    // format STATE HOOK, count=nama variabel, setCount=function pengubahnya, useState() itu penyimpannya
    const [count, setCount] = useState(0) // useState(0) jika Number, ('') jika string, (true/ false) jika bolean

    const increment = (num) => {
        setCount(count + num) // ini agar oto berubah oleh count + num        
    }

    // useEffect merupakan HOOK yang dapat mengubah langsung tanpa diklik
    // document.titile itu mengubah title ditab browser
    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count]) // , [count] yang terakhir itu merupakan kondisi dia berubah, [] terakhir sebelah komen ini menandakan, metod ini hny dijalannya sekali diawal (pertama kali dirender). 

    return (
        <div>
            <h1>{count}</h1>
            {/* jika penambahannya berupa variabel, maka onClick={increment} menjadi onClick={() => increment(5)}, //! ADA TAMBAHAN "() => " */}
            <button onClick={() => increment(5)}>increment</button>
        </div>
    )
}