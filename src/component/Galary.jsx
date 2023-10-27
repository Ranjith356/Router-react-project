import style from "./Homepage.module.css";

export default function Galary() {
  return (
    <div className={style.back}>
      <h1>Buy@Sell your product </h1>
      <h4>Leverage our powerful API to do amazing things!</h4>

      <img src="wp2599594.jpg" alt="" />
      <p>
        With our API you can retrieve current weather observations from over
        50,000 live weather stations, and historical weather data for the past
        20+ years sourced from stations, doppler radar, satellite, and
        atmospheric re-analysis products. As well as highly localized weather
        forecasts for any point on the globe backed by the world's most trusted
        weather models, and machine learning.
      </p>
      <footer>Best seller lanching product</footer>
    </div>
  );
}
