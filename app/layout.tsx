import '../styles/globals.css'
import Nav from "@/components/Nav"

export const metadata = {
    title: "Portfolio Site",
    description: "Andy's Portfolio Site"
}

const layout = ({children} : any) => {
  return (
    <html lang="en">
        <body>
            <Nav />
            <main className="main">
                {children}
            </main>
            {/* {children} */}
        </body>
    </html>
  )
}

export default layout