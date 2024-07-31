import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from './store/cartSlice';


const Cart = () => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    const handleRemoveFromCart = (productId) => {
        dispatch(remove(productId));
      };

      const cards = products.map((product, index) => (
        
        <div className="col-md-12" style={{ marginBottom: '10px' }} key={index}>
          <Card style={{ width: '18rem' }} className="h-100">
          {console.log(product,"ppp")}
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '100px', height: '130px' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: 'white' }}>
                <Button variant="danger" onClick={() => handleRemoveFromCart(product.id)}>
                  Remove From Cart
                </Button>
              </Card.Footer>
            </div>
          </Card>
        </div>
      ));

  return (
    <>
      <h1>cart</h1>
      <div className='row'>
        {cards}
      </div>
       
    </>
  )
}

export default Cart
