import React, { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { dispatchDelete } from "../actions/actions";

const Header = () => {
  const dispatch = useDispatch();
  let [listOpen, setListOpen] = useState(false);
  const shop = useSelector((state) => state.shop);

  const totelPrise = () => {
    let total = 0;
    shop.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  const handlClose = () => {
    setListOpen((listOpen = !listOpen));
  };

  const handlDelete = () => {
    dispatch(dispatchDelete());
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1>
          Second: <span>Store!</span>
        </h1>
      </div>

      <GiShoppingCart
        onClick={handlClose}
        className={`shoping ${listOpen && "active"}`}
      />

      {listOpen && (
        <div className="shopList">
          <div className="deleteClose">
            <MdOutlineDeleteSweep onClick={handlDelete}/>
            <AiOutlineFullscreenExit onClick={handlClose} />
          </div>

          <h3>Ваши покупки:</h3>
          {shop.map((product, index) => (
            <div key={index}>
              <p>{product.title}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
          <span>Total: ${totelPrise()}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
