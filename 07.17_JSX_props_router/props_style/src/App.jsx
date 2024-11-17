import Props from './component/props'
import Style from './component/style'
import './App.css'


function App() {
  const data = "Pasti SUKSES"
  return (
    <>
      <Props name={data}/>{/* ini cara ngirim props ke hello.jsx, name itu merupakan props */}
      <Style />
    </>
  )
}

export default App
