import React from "react";
import classes from "./ProgramInformationItem.module.css";

//ProgramInformationItem component destructures received data from ProgramInformation
// component and uses it to render program's benefits.

type ProgramInformationItemProps = {
  title: string;
  image: string;
  paragraph: string;
};

const ProgramInformationItem: React.FC<ProgramInformationItemProps> = ({
  title,
  image,
  paragraph,
}) => {
  return (
    <React.Fragment>
      <li className={classes.list}>
        <img src={image} alt={image} />
        <div className={classes.text}>
          <div className={classes.title}>{title}</div>
          <div className={classes.paragraph}>{paragraph}</div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default ProgramInformationItem;
