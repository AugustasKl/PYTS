import React, { useState } from "react";
import classes from "./OfferList.module.css";
import { DUMMY_OFFERS } from "../../../DUMMY_DATA/dummyOffers";
import OfferItem from "./OfferItem";



const OfferList:React.FC= () => {
  const [offer, setOffer] = useState<string>('');

    //logging selected option after button click
  const submitSelectedPlanHandler = () => {
    console.log(offer);
  };

  // data received from subsription options
  const selectedPlanHandler = (option:string) => {
    setOffer(option);
  };

  return (
    <React.Fragment>
      <div className={classes.form}>
        <div className={classes.options}>
          <div className={classes.header}>
          <h2> Choose your plan and get</h2>
            <h2 className={classes.highlight}> 7 days free trial</h2>
          </div>
          <ul>
            {DUMMY_OFFERS.map((offer) => {
              return (
                <OfferItem
                  key={offer.id}
                  title={offer.title}
                  price={offer.price}
                  oldPrice={offer.oldPrice}
                  newPrice={offer.newPrice}
                  message={offer.message}
                  promo={offer.promo}
                  onSendSelectedData={selectedPlanHandler}
                />
              );
            })}

            <button onClick={submitSelectedPlanHandler} className={classes.button}>
              Get your plan
            </button>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default OfferList;
