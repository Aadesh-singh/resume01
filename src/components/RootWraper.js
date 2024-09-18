import classes from "./RootWraper.module.css";
const RootWraper = (props) => {
  return <div className={classes["wraper"]}>{props.children}</div>;
};
export default RootWraper;
