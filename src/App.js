import React, { useEffect } from "react";
import "./styles.css";
import World from "./world";
import panzoom from "panzoom";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App() {
  //
  useEffect(() => {
    var instance = panzoom(document.getElementById("g4"), {
      maxZoom: 5,
      minZoom: 0.1,
      initialX: 600,
      initialY: 200,
      initialZoom: 2
    });
    instance.on("panstart", function (e) {
      // console.log("Fired when pan is just started ", e);
      // Note: e === instance.
    });

    instance.on("pan", function (e) {
      //  console.log("Fired when the scene is being panned", e);
    });

    instance.on("panend", function (e) {
      // console.log("Fired when pan ended", e);
    });

    instance.on("zoom", function (e) {
      //  console.log("Fired when scene is zoomed", e);
    });

    instance.on("transform", function (e) {
      // This event will be called along with events above.
      //  console.log("Fired when any transformation has happened", e);
    });
  }, []);
  const { data } = useQuery(
    "covidWorld",
    () =>
      fetch("https://coronavirus-19-api.herokuapp.com/countries").then((res) =>
        res.json()
      ),
    {
      cacheTime: 360000,
      staleTime: 360000
    }
  );

  return (
    <div className="App">
      <World data={data} />
      <ReactQueryDevtools />
    </div>
  );
}
