import Link from 'next/link'

function Home(){
    return (
     <div>
        <h1>Home page</h1>
        <Link href='/about'>
            About
         </Link>
         <Link href='/product'>
            Products
         </Link>
    </div>
    )

}
export default Home