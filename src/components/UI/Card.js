import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  // Components doesn't use global HTML Classes unless they're told to do so;
  // One way to do that is to define the classes + the className that comes through props.
  // PS: don't forget the space, since you are concatenating css classes!
  return <div className={classes}>{props.children}</div>;
}

export default Card;
