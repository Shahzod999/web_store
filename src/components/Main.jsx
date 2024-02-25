import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineReadMore, MdShoppingCartCheckout } from "react-icons/md";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addToShop } from '../actions/actions';
import { Link } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const shop = useSelector(state => state.shop);

  const [search, setSearch] = useState("");
  let [getShop, setGetShop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleChange = e => {
    setSearch(e.target.value)
  };

  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect (() => {
    dispatch(fetchProducts());
  },[dispatch])

  const openModal = (product) => {
    setSelectedProduct(product);
    setGetShop(getShop = !getShop);
  }

  const handleAddToShop = () => {
    if (!shop.includes(selectedProduct)) {
      dispatch(addToShop(selectedProduct));
    }
    closeModal();
  };

  const closeModal = () => {
    setGetShop(false);
  }

  return (
    console.log(selectedProduct),
    <main>
      <div className="serch-input">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleChange}
        />
      </div>
      {filteredProducts.map((product) => (
        <div key={product.id} className="productBox">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h5>Price: ${product.price}</h5>
            <h5>Rating: {product.rating}</h5>
            
              <MdShoppingCartCheckout className='shoping' onClick={() => openModal(product)}/>

              {selectedProduct.id === product.id && (

                  <Stack direction="row" spacing={2}>
                    <Button onClick={handleAddToShop} variant="contained" color="success" style={{ display: getShop ? "block" : "none"}}>
                      Buy
                    </Button>
                    <Button onClick={closeModal} variant="outlined" color="error" style={{ display: getShop ? "block" : "none"}}>
                      Cancel
                    </Button>
                  </Stack>

              )}
            
            <div className="productImg">
              {product.images.map((image, index) => (
                <img key={index} src={image} alt={`${index}`} />
              ))}
            </div>
            <Link to ={`/${product.id}`}>
              <MdOutlineReadMore className='shoping'/>
            </Link>
        </div>
        ))}
    </main>
  );
};

export default Main