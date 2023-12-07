import Link from 'next/link'

function Home(){
   const handleclick =() =>{
      console.log('Placing your on')

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
         <botton onclick={handleclick}>
            Place Order
         </botton>
    </div>
    )

}
export default Home