import AppBar from "./components/AppBar/AppBar"

const Layout = ({children}) => {
  return (
    <div>
      <AppBar />
      <main>
        <p fallback={null}>{children}</p>
      </main>
    </div>
  )
}

export default Layout