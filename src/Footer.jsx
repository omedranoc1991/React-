import React from "react";

var date = new Date();
var currentYear = date.getFullYear();


function Footer() {
  return <footer><p>Copyright {currentYear}</p></footer>;
}

export { Footer};