import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){
   const router = useRouter()
   const handleClick =() =>{
      console.log('Placing your order')
      router.push('/product')

   }
    return (
     <div>
        <h1>Home page</h1>
        <Link href='/about'>
            About
         </Link>
         <Link href='/product'>
            Products
         </Link>
         <Link href='/workers'>
            Workers
         </Link>
         <botton onClick={handleClick}>
            Place Order
         </botton>
    </div>
    )

}
export default Home