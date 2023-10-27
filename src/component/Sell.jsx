import { NavLink } from "react-router-dom";
import style from "./Sell.module.css";
import { Button } from "antd";

export default function Sell() {
  return (
    <>
      <div className={style.titile}>
        <p>sell on Your product</p>
        <Button type="primary">
          {<NavLink to="Sell">start selling</NavLink>}
        </Button>
      </div>
      <img className={style.phot} src="50_offer_May.webp" alt="img"></img>
      <br></br>
      <div className={style.side}>
        <Button type="primary">LIMITED TIME OFFER</Button>
        <p>
          Became a seller<br></br>on Amazon
        </p>
        <p>
          Sell to crores of customers with 50% off on Selling Fee* on Amazon.in
        </p>

        <Button type="primary">
          {<NavLink to="Sell">start selling</NavLink>}
        </Button>
      </div>
    </>
  );
}
