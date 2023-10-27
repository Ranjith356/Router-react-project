import { useEffect, useState } from "react";
import style from "./Bestsell.module.css";

export default function Bestsell() {
  const [value, setvalue] = useState("");
  useEffect(function () {
    const x = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const result = await res.json();
      setvalue(result.data);
    };
    return x;
  }, []);
  return (
    <div className={style.flex}>
      <h1>Happy customers</h1>
      <div className={style.flexs}>
        {value.length &&
          value.map((v) => {
            return (
              <div key={v.id}>
                <p>
                  <strong>{v.first_name}</strong>
                </p>
                <p>{v.email}</p>
                <img key={v.avatar} src={v.avatar} alt={v.avatar}></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}
