import _ from "lodash";

import { cube } from "./math.js";

// // static manage
// load css
// import './static/css/style.css';
// // load image
// import Icon from './static/images/icon.svg';
// // load data
// import Data from './static/data/data.xml';

// import js output
import printMe from "./print.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!!!!");
}

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // // static manage
  // // 将图像添加到我们已经存在的 div 中。
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // myIcon.height = 30;
  // myIcon.width = 30;
  // element.appendChild(myIcon);
  // console.log(Data);

  // //
  var btn = document.createElement("button");
  btn.innerHTML = "点击这里查看log!";
  btn.onclick = printMe;
  // 异步加载需要的js　懒加载
  // btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //     var printMes = module.default;
  //     printMes();
  // });

  element.appendChild(btn);

  //
  var elements = document.createElement("pre");
  elements.innerHTML = [
    "Hello webpack!",
    "5 cubed is equal to " + cube(5),
  ].join("\n\n");

  element.appendChild(elements);

  return element;
}

document.body.appendChild(component());

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// // 模块热更新
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }
