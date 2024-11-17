import Navbar from "./components/navbar"


function App() {
  

  return (
    <>
      <Navbar />

      {/**    p-1             => padding horizontal vertical sama
              rounded-md      => border radius md medium
      */}
      <button className="bg-orange-500 p-1 rounded-md hover:bg-red-500 hover:border-green-600">Submit</button>
    </>
  )
}

export default App
