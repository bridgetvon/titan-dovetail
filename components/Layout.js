import Nav from './Nav'
import Meta from './Meta'

export default function Layout({children}) {
    return (
        <>
            <div>
                <Meta /> 
                <Nav />
                <main>
                    {children}
                </main>
                    
            </div>
        </>
    )
}