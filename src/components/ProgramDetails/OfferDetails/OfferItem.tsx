import React from "react";
import classes from "./OfferItem.module.css";


type OfferItemProps = {
  title?: string;
  price?: number;
  oldPrice?: number;
  message?: string;
  promo?: string;
  newPrice?: number;
  onSendSelectedData: (option: string) => void;
};





const OfferItem: React.FC<OfferItemProps> = (props) => {
  const { title, price, oldPrice, message, promo, newPrice } = props;

  // selected subscription option is being sent to parent component (OfferList.js)
  const changehandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(event.currentTarget.value)
    props.onSendSelectedData(event.currentTarget!.value);
  };

  return (
    <li>
      <div className={classes.radio}>
        <label className={classes.container}>
          <div className={classes.option}>
            <div className={classes.title}>
              <p>{title}</p>
              {promo && <p className={classes.discount}>{promo}</p>}
            </div>
            <div className={classes.prices}>
              <p>
                <b className={classes.bold}>${price}</b>/month
              </p>
            </div>
            <div className={classes.details}>
              {message!.includes("months") ? <del>${oldPrice}</del> : ""}
              {message && oldPrice && (
                <p className={classes.highlight}>${newPrice}</p>
              )}
              {message && <p>{message}</p>}
            </div>
          </div>
          <input
            type="radio"
            value={title}
            name="radio"
            onChange={changehandler}
          />
          <span className={classes.checkmark} />
        </label>
      </div>
    </li>
  );
};

export default OfferItem;
