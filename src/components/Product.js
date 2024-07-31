import React, { useEffect} from "react";
import  Alert  from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";
import statusCode from "./utils/statusCode";


const Product = () => {
  const dispatch = useDispatch();

  // here we write getting data as products
  const {data: products, status} = useSelector((state)=> state.products)

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));

    dispatch(getProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(status === statusCode.LOADING){
    return <div><h1>Loading...</h1></div>
  }

  if(status === statusCode.ERROR){
    return <div><Alert key="danger" variant="danger">Failed to load products</Alert></div>
  }

  const addToCart = (product) =>{
    console.log(product,"odododod")
      //dispatch an add action
      dispatch(add(product));
  }

  // eslint-disable-next-line no-unused-vars
  const cards = products.map((product, index) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}  key={index}>
      <Card style={{ width: "18rem" }} className="h-100" key={product.id}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{backgroundColor:'white'}}>
            <Button variant="primary" onClick={()=>{
                addToCart(product)
            }}>Add To Cart</Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product component</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
