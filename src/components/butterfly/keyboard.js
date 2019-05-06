import React from "react"
import Key from "./keycap.module.scss"

class ButterflyKeyboard extends React.Component {
  constructor() {
    super();
    this.state = {key: ''};
  }
  
  componentDidMount() {
    window.addEventListener("keydown", this.keyHandling)
  }

  keyHandling(e) {
    // Handle event
    console.log("Key code: " + e.keyCode);
  }

  render() {
    return (
      <div className={Key.board}>
        <div className={Key.group}>
          <div className={Key.row1}>
            <div className={Key.cap} data-keycode="81">
              <kbd>q</kbd>
            </div>
            <div className={Key.cap} data-keycode="87">
              <kbd>w</kbd>
            </div>
            <div className={Key.cap} data-keycode="69">
              <kbd>e</kbd>
            </div>
            <div className={Key.cap} data-keycode="82">
              <kbd>r</kbd>
            </div>
            <div className={Key.cap} data-keycode="84">
              <kbd>t</kbd>
            </div>
            <div className={Key.cap} data-keycode="89">
              <kbd>y</kbd>
            </div>
            <div className={Key.cap} data-keycode="85">
              <kbd>u</kbd>
            </div>
            <div className={Key.cap} data-keycode="73">
              <kbd>i</kbd>
            </div>
            <div className={Key.cap} data-keycode="79">
              <kbd>o</kbd>
            </div>
            <div className={Key.cap} data-keycode="80">
              <kbd>p</kbd>
            </div>
          </div>
          <div className={Key.row2}>
            <div className={Key.cap} data-keycode="65">
              <kbd>a</kbd>
            </div>
            <div className={Key.cap} data-keycode="83">
              <kbd>s</kbd>
            </div>
            <div className={Key.cap} data-keycode="68">
              <kbd>d</kbd>
            </div>
            <div className={Key.cap} data-keycode="70">
              <kbd>f</kbd>
            </div>
            <div className={Key.cap} data-keycode="71">
              <kbd>g</kbd>
            </div>
            <div className={Key.cap} data-keycode="72">
              <kbd>h</kbd>
            </div>
            <div className={Key.cap} data-keycode="74">
              <kbd>j</kbd>
            </div>
            <div className={Key.cap} data-keycode="75">
              <kbd>k</kbd>
            </div>
            <div className={Key.cap} data-keycode="76">
              <kbd>l</kbd>
            </div>
          </div>
          <div className={Key.row3}>
            <div className={Key.cap} data-keycode="90">
              <kbd>z</kbd>
            </div>
            <div className={Key.cap} data-keycode="88">
              <kbd>x</kbd>
            </div>
            <div className={Key.cap} data-keycode="67">
              <kbd>c</kbd>
            </div>
            <div className={Key.cap} data-keycode="86">
              <kbd>v</kbd>
            </div>
            <div className={Key.cap} data-keycode="66">
              <kbd>b</kbd>
            </div>
            <div className={Key.cap} data-keycode="78">
              <kbd>n</kbd>
            </div>
            <div className={Key.cap} data-keycode="77">
              <kbd>m</kbd>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ButterflyKeyboard
