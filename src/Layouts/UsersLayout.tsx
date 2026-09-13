import { Outlet } from "react-router"

const UsersLayout = () => {
  return (
    <div>
      <h1>Layout here</h1>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default UsersLayout
