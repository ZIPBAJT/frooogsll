import { Button } from "antd";
import { useState } from "react";
import styles from "../styles/Nav.module.css";
import { Popover } from "antd";
import React from "react";

export function Nav() {
  //  coздает реакт переменую
  let [color, setColor] = useState("rgba(0, 255, 60, 1)");

  let colors = ["CornflowerBlue", "SkyBlue", "RoyalBlue", "MediumSlateBlue", "Indigo",
  "Turquoise", "LightSeaGreen", "SeaGreen", "ForestGreen", "OliveDrab",
  "Gold", "OrangeRed", "DarkOrange", "Tomato", "Salmon",
  "Crimson", "HotPink", "Plum", "Violet", "Lavender",
  "Sienna", "Magenta", "YellowGreen", "MidnightBlue",
  // 176 more colors
  "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue",
  "BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","Cornsilk","Crimson",
  "DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen",
  "DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkTurquoise",
  "DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia",
  "Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Green","GreenYellow","HoneyDew","HotPink","IndianRed",
  "Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral",
  "LightCyan","LightGoldenRodYellow","LightGray","LightGreen","LightPink","LightSalmon","LightSeaGreen",
  "LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta",
  "Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue",
  "MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin",
  "NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
  "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple",
  "Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver",
  "SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise",
  "Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

  let content = (
    <>
      <div
        onClick={() => setColor("red")}
        className={styles.colores}
        style={{ backgroundColor: "red" }}
      ></div>

    <div
  className={styles.colorContainer}
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // 5 columns
    gap: "10x" // small uniform gap between all rows and columns
  }}
>
  {colors.map((color) => (
    <div
      key={color}
      onClick={() => setColor(color)}
      className={styles.colores}
      style={{ backgroundColor: color, aspectRatio: "1 / 2" }} // square blocks
    ></div>
  ))}
</div>
 <div
    className={styles.colorContainer}
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)", // 5 columns
      gap: "0", // no gaps
      width: "2.5px", // adjust size if needed
      height: "2.5px" // ensures square container
    }}
  >
    {colors.map((color) => (
      <div
        key={color}
        onClick={() => setColor(color)}
        className={styles.colores}
        style={{ backgroundColor: color, width: "100%", height: "100%" }}
      ></div>
    ))}
  </div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))", // columns automatically fit
    gridAutoRows: "1fr", // rows same height as columns
    width: "100%",
    aspectRatio: "1 / 1", // container is always square
    gap: "0", // no gaps
  }}
>
  {colors.map((color) => (
    <div
      key={color}
      onClick={() => setColor(color)}
      className={styles.colores}
      style={{
        backgroundColor: color,
        width: "100%",
        height: "100%",
        aspectRatio: "1 / 1" // ensures each cell is square
      }}
    ></div>
  ))}
</div>






      {/* <div
        onClick={() => setColor("red")}
        className={styles.colores}
        style={{ backgroundColor: "red" }}
      ></div>
      <div
        onClick={() => setColor("yellow")}
        className={styles.colores}
        style={{ backgroundColor: "yellow" }}
      ></div>
      <div
        onClick={() => setColor("blue")}
        className={styles.colores}
        style={{ backgroundColor: "blue" }}
      ></div>
      <div
        onClick={() => setColor("black")}
        className={styles.colores}
        style={{ backgroundColor: "black" }}
      ></div>
      <div
        onClick={() => setColor("rgb(46, 136, 67)")}
        className={styles.colores}
        style={{ backgroundColor: "rgb(46, 136, 67)" }}
      ></div>
      <div
        onClick={() => setColor("rgb(46, 136, 67)")}
        className={styles.colores}
        style={{ backgroundColor: "rgb(46, 136, 67)" }}
      ></div>
<div
        onClick={() => setColor("AliceBlue")}
        className={styles.colores}
        style={{ backgroundColor: "AliceBlue" }}
      ></div>
<div
        onClick={() => setColor("AntiqueWhite")}
        className={styles.colores}
        style={{ backgroundColor: "AntiqueWhite" }}
      ></div>
<div
        onClick={() => setColor("Aqua")}
        className={styles.colores}
        style={{ backgroundColor: "Aqua" }}
      ></div>
<div
        onClick={() => setColor("Aquamarine")}
        className={styles.colores}
        style={{ backgroundColor: "Aquamarine" }}
      ></div>
<div
        onClick={() => setColor("Azure")}
        className={styles.colores}
        style={{ backgroundColor: "Azure" }}
      ></div>
<div
        onClick={() => setColor("Beige")}
        className={styles.colores}
        style={{ backgroundColor: "Beige" }}
      ></div>
<div
        onClick={() => setColor("Bisque")}
        className={styles.colores}
        style={{ backgroundColor: "Bisque" }}
      ></div>

<div
        onClick={() => setColor("Black")}
        className={styles.colores}
        style={{ backgroundColor: "Black" }}
      ></div>

<div
        onClick={() => setColor("BlanchedAlmond")}
        className={styles.colores}
        style={{ backgroundColor: "BlanchedAlmond" }}
      ></div>
<div
        onClick={() => setColor("Blue")}
        className={styles.colores}
        style={{ backgroundColor: "Blue" }}
      ></div>

<div
        onClick={() => setColor("BlueViolet")}
        className={styles.colores}
        style={{ backgroundColor: "BlueViolet" }}
      ></div>

<div
        onClick={() => setColor("Brown")}
        className={styles.colores}
        style={{ backgroundColor: "Brown" }}
      ></div>
<div
        onClick={() => setColor("BurlyWood")}
        className={styles.colores}
        style={{ backgroundColor: "BurlyWood" }}
      ></div>
<div
        onClick={() => setColor("CadetBlue")}
        className={styles.colores}
        style={{ backgroundColor: "CadetBlue" }}
      ></div>
<div
        onClick={() => setColor("Charteuse")}
        className={styles.colores}
        style={{ backgroundColor: "Charteuse" }}
      ></div>

<div
        onClick={() => setColor("Chocolate")}
        className={styles.colores}
        style={{ backgroundColor: "Chocolate" }}
      ></div>

<div
        onClick={() => setColor("Cornsilk")}
        className={styles.colores}
        style={{ backgroundColor: "Cornsilk" }}
      ></div>
<div
        onClick={() => setColor("Coral")}
        className={styles.colores}
        style={{ backgroundColor: "Coral" }}
      ></div>
<div
        onClick={() => setColor("CornflowerBlue")}
        className={styles.colores}
        style={{ backgroundColor: "CornflowerBlue" }}
      ></div> */}
    </>
  );

  return (
    <div className={styles.dive}>
      <div className={styles.sok} style={{ borderColor: color }}>
        <Popover content={content} title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/scetchess")}
          style={{ borderColor: color }}
        >
          scetches_of_p5
        </button>
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/ikone")}
          style={{ borderColor: color }}
        >
          ikone
        </button>{" "}
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/telegun")}
          style={{ borderColor: color }}
        >
          telegramm
        </button>{" "}
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/buttondownload")}
          style={{ borderColor: color }}
        >
          buttons_download
        </button>
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/mathematics")}
          style={{ borderColor: color }}
        >
          mathematical_adventure
        </button>

        
      </div>
    </div>
  );
}
