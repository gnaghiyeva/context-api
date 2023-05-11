
import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useBasketContext } from '../context/basket';

import { Button} from '@mui/material';
import Navbar from '../components/Navbar';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const{basket,setBasket} = useBasketContext();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>setProducts(data), setLoading(true))
    },[])

  

  return (
   <>
      <Navbar/>
        <h1 style={{textAlign:'center'}}>Games</h1>
        <Row style={{ width: '80%', margin: '0 auto' }} gutter={[20, 30]}>

            {products && products.map((post) => (
                <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
                    <Card style={{ height: '700px' }} hoverable key={post.id}
                        cover={<img alt="example" src={post.image} style={{height:'300px'}} />}
                    >

                        <h3><i>title:</i>{post.title}</h3>
                        <h3><i>Price:</i> {post.price}</h3>
                        <p><i>category:</i> {post.category}</p>

                        <p><i>rate:</i> {post.rating.rate}</p>
                        <p><i>count:</i> {post.rating.count}</p>
                        {/* <Button onClick={()=>{setBasket([...basket,products])}} variant='contained'>Add to favourites</Button> */}
                        <Button variant='contained'>Add to favourites</Button>

                        {/* <p><b>ID:</b>{post.id}</p> */}
                    </Card>
                </Col>

            ))}

        </Row>
        </>
  )

            }
export default Home