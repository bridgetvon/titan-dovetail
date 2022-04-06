import Nav from './Nav'
import Meta from './Meta'
import Contact from './Contact'

export default function Layout({children}) {
    return (
        <>
            <div>
                <Meta /> 
                <Nav />
                <main>
                    {children}
                </main>
                <Contact />
            </div>
        </>
    )
}