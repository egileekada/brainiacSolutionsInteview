import { RegisterForm, SideBar } from "./component"

function App() {
  return (
    <div className=" w-full h-screen overflow-hidden flex  " >
      <div style={{background: "linear-gradient(324.93deg, #007AFF 0.74%, #0F70DA 100%)"}} className=" w-[47%] lg:block hidden h-screen" >
        <SideBar />
      </div>
      <div className=" w-full lg:w-[53%] h-screen overflow-y-auto bg-white " >
        <RegisterForm />
      </div>
    </div>
  )
}

export default App
