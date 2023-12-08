import Link from 'next/link'
 export default function ProductList(){
    return(
        <>
     <Link href='/'>
        Home
        </Link>

        <h2>
           <Link href='/water proof/1'>
           water proof
           </Link>
            </h2>
        <h2>
        <Link href='/ sand proof'>
        sand proof
           </Link>
           
            </h2>

        <h2>
           
        <Link href='/ salt' replace>
        salt
           </Link>
        </h2>

            <h2>
        <Link href={'/ product/${productI}'}>
         product
           </Link>
            </h2>
    
        </>
    )
}
