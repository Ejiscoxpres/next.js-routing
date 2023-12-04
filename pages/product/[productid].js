import {useRouter} from 'next/router'
function ProductDetails(){
    const router = useRouter()
    const ProductId = router.query.ProductId
    return <h1>Know More About Our Products{ProductId}</h1>
}

export default ProductDetails