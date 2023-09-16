import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Colors from '../section/Colors';
import '../css/Details.css';

function ProductDetails(props) {
  const products = [
    {
      _id: '1',
      title: 'Nike Shoes 01',
      src: 'https://sneakerdaily.vn/wp-content/uploads/2023/05/Giay-Spider-Man-%C3%97-Nike-Air-Jordan-1-Retro-High-OG-SP-Next-Chapter-DV1748-601.jpg',
      description: '',
      content: 'giày rất đẹp',
      price: 23,
      colors: ['red', 'black', 'crimson', 'teal'],
      count: 1,
    },
  ];

  const params = useParams();
  const { id: idProduct } = params;

  console.log('params: ', idProduct);

  return (
    <div>
      <div>Product Detail: {idProduct}</div>
      {products.map((item) => (
        <div className="details" key={item._id}>
          <img src={item.src} alt="" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <Colors colors={item.colors} />
            <p>{item.description}</p>
            <p>{item.content}</p>
            <Link to="/cart" className="cart">
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
