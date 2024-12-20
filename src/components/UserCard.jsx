import { Card } from "antd";
const UserCard = (props) => (
  <Card
    className="border-blue-500 m-5"
    title={props.name}
    extra={<a href="#">More</a>}
  >
    <p>User name: {props.username}</p>
    <p>Phone number: {props.phone}</p>
    <p>Email: {props.email}</p>
    <p>Website: {props.website}</p>
  </Card>
);
export default UserCard;
