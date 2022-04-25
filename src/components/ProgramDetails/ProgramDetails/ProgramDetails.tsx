import React from 'react'
import OfferList from '../OfferDetails/OfferList';
import SubscriptionMessage from '../OfferDetails/SubscriptionMessage';
import ProgramInformation from '../ProgramInformation/ProgramInformation';
import classes from "./ProgramDetails.module.css";
const ProgramDetails: React.FC = () => {
  return (
    <React.Fragment>
      <section className={classes.program}>
        <div className={classes.information}>
          <div className={classes.data}>
            <OfferList />
            <SubscriptionMessage />
          </div>
          <ProgramInformation />
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProgramDetails