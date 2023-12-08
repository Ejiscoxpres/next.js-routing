import Link from 'next/link'
 export default function ProductList({productId=100}){
    return(
        <>
     <Link href='/'>
        Home
        </Link>

        <h2>
           <Link href='/'>
           water proof 1
           </Link>
            </h2>
        <h2>
        <Link href='/ '>
        sand proof 2
           </Link>
           
            </h2>

        <h2>
           
        <Link href='/ ' replace>
        salt 3
           </Link>
        </h2>

            <h2>
        <Link href={'/ '}>
         product{productId}
           </Link>
            </h2>
    
        </>
    )
}
