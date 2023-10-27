import { Tabs } from "antd";
import Galary from "./Galary";
import Sell from "./Sell";
import Bestsell from "./Bestsell";
import style from "./AppNave.module.css";

const items = [
  {
    key: "1",
    label: "Home",
    children: <Galary></Galary>,
  },
  {
    key: "2",
    label: "Sell",
    children: <Sell></Sell>,
  },
  {
    key: "3",
    label: "Bestsell",
    children: <Bestsell></Bestsell>,
  },
];

export default function AppNave() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className={style.flex}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}></Tabs>
    </div>
  );
}
