import Link from 'next/link'
function ProductList(){
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
        <Link href='/ sand proof/2'>
        sand proof
           </Link>
           
            </h2>
        <h2>
        <Link href='/ salt/3'>
        salt
           </Link>
            </h2>
        </>
    )
}

export default ProductList