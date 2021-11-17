import Link from 'next/link'
import SideBar from './SideBar'

const Layout = ({ children }) => (
  <>
    <SideBar/>
    <main>{children}</main>
    <style jsx>{`
      nav {
        text-align: center;
      }
      nav a {
        margin-right: 2px;
        padding: 4px;
      }
      main {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
)

export default Layout
