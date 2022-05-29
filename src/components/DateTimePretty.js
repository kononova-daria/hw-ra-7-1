import moment from "moment";
import DateTime from "./DateTime";

function toDateTimePretty(Component) {
  return (props) => <Component {...props} date={moment(props.date).fromNow()}/>
}

const DateTimePretty = toDateTimePretty(DateTime);

export default DateTimePretty;