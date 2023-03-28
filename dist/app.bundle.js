(()=>{var n,r,t,e,o={756:(n,r,t)=>{"use strict";t.d(r,{Z:()=>u});var e=t(537),o=t.n(e),i=t(645),a=t.n(i),A=t(948),s=t(667),c=t.n(s),l=new URL(t(66),t.b),p=a()(o());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,500;1,600;1,700&display=swap);"]),p.i(A.Z);var d=c()(l);p.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  list-style: none;\n  text-decoration: none;\n}\n\n:root {\n  --main-color: #ffaa00;\n  --text-color: #fff;\n  --bg-color: #1e1c2a;\n  --big-font: 5rem;\n  --h2-font: 2.25rem;\n  --p-font: 0.9rem;\n}\n*::selection {\n  background-color: var(--main-color);\n  color: var(--text-color);\n}\n\nbody {\n  color: var(--text-color);\n  background: var(--bg-color);\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 170px;\n  background-color: var(--bg-color);\n}\n\n.logo {\n  color: var(--main-color);\n  font-weight: 600;\n  font-size: 2.4rem;\n}\n\nnav ul {\n  display: flex;\n}\n\nnav a {\n  color: var(--text-color);\n  font-size: 1.1rem;\n  padding: 10px 20px;\n  font-weight: 500px;\n}\n\nnav a:hover {\n  color: var(--main-color);\n  transition: 0.4s;\n}\n\n#menu-icon {\n  font-size: 2rem;\n  cursor: pointer;\n  display: none;\n}\n\n.jumbotron {\n  margin-top: 78px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  min-height: 550px;\n  width: 100%;\n  background-image: url("+d+");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.boxjubotron {\n  width: 100%;\n  padding: 40px;\n  color: var(--text-color);\n  margin: 10%;\n  background-color: #28282cb3;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.title-jumbotron {\n  color: #fff;\n  font-weight: 500;\n  font-size: 36px;\n}\n\n.text-jumbotron {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 900;\n}\n\n.text-jumbotron span {\n  color: var(--main-color);\n}\n\n.about_label {\n  font-size: 25px;\n  font-weight: lighter;\n  text-align: center;\n}\n\n.about_label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  /* border-bottom: 1px solid #eeeeee; */\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 32px;\n}\n\n.latest {\n  width: 100%;\n  margin: 10px auto;\n  text-align: center;\n}\n\n.latest__label {\n  font-size: 25px;\n  font-weight: lighter;\n}\n\n.latest__label::after {\n  margin-top: 16px;\n  display: block;\n}\n\n.posts {\n  margin: 32px auto auto;\n  text-align: left;\n  display: grid;\n  grid-row-gap: 16px;\n}\n\n.post-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.post-item__content {\n  padding: 16px;\n}\n\n.image-tumbnail {\n  width: 100%;\n  max-height: 220px;\n}\n\n.post-item__date {\n  font-size: 15px;\n  color: #999;\n}\n\n.post-item__title {\n  font-weight: 500;\n  font-size: 16px;\n  /* margin-top: 16px; */\n  transition: 0.3s opacity;\n}\n\n.post-item__title:hover {\n  opacity: 0.5;\n}\n\n.post-item__title a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.post-item__description {\n  margin-top: 16px;\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\nfooter {\n  border-top: 1px solid white;\n  background-color: var(--bg-color);\n  padding: 1em;\n  width: 100%;\n  text-align: center;\n}\n\nfooter ul {\n  margin: 0 auto;\n  display: inline-block;\n}\n\nfooter li {\n  display: inline-block;\n  margin: 0 1em;\n  font-size: 14px;\n}\n\nfooter a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #fff;\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAGA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,kCAAkC;EAClC,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,WAAW;EACX,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,yDAAgE;EAChE,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,wBAAwB;EACxB,WAAW;EACX,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,iCAAiC;EACjC,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,WAAW;AACb",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,500;1,600;1,700&display=swap');\n@import 'responsive.css';\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  list-style: none;\n  text-decoration: none;\n}\n\n:root {\n  --main-color: #ffaa00;\n  --text-color: #fff;\n  --bg-color: #1e1c2a;\n  --big-font: 5rem;\n  --h2-font: 2.25rem;\n  --p-font: 0.9rem;\n}\n*::selection {\n  background-color: var(--main-color);\n  color: var(--text-color);\n}\n\nbody {\n  color: var(--text-color);\n  background: var(--bg-color);\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 170px;\n  background-color: var(--bg-color);\n}\n\n.logo {\n  color: var(--main-color);\n  font-weight: 600;\n  font-size: 2.4rem;\n}\n\nnav ul {\n  display: flex;\n}\n\nnav a {\n  color: var(--text-color);\n  font-size: 1.1rem;\n  padding: 10px 20px;\n  font-weight: 500px;\n}\n\nnav a:hover {\n  color: var(--main-color);\n  transition: 0.4s;\n}\n\n#menu-icon {\n  font-size: 2rem;\n  cursor: pointer;\n  display: none;\n}\n\n.jumbotron {\n  margin-top: 78px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  min-height: 550px;\n  width: 100%;\n  background-image: url('../public/images/heros/hero-image_3.jpg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.boxjubotron {\n  width: 100%;\n  padding: 40px;\n  color: var(--text-color);\n  margin: 10%;\n  background-color: #28282cb3;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.title-jumbotron {\n  color: #fff;\n  font-weight: 500;\n  font-size: 36px;\n}\n\n.text-jumbotron {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 900;\n}\n\n.text-jumbotron span {\n  color: var(--main-color);\n}\n\n.about_label {\n  font-size: 25px;\n  font-weight: lighter;\n  text-align: center;\n}\n\n.about_label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  /* border-bottom: 1px solid #eeeeee; */\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 32px;\n}\n\n.latest {\n  width: 100%;\n  margin: 10px auto;\n  text-align: center;\n}\n\n.latest__label {\n  font-size: 25px;\n  font-weight: lighter;\n}\n\n.latest__label::after {\n  margin-top: 16px;\n  display: block;\n}\n\n.posts {\n  margin: 32px auto auto;\n  text-align: left;\n  display: grid;\n  grid-row-gap: 16px;\n}\n\n.post-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.post-item__content {\n  padding: 16px;\n}\n\n.image-tumbnail {\n  width: 100%;\n  max-height: 220px;\n}\n\n.post-item__date {\n  font-size: 15px;\n  color: #999;\n}\n\n.post-item__title {\n  font-weight: 500;\n  font-size: 16px;\n  /* margin-top: 16px; */\n  transition: 0.3s opacity;\n}\n\n.post-item__title:hover {\n  opacity: 0.5;\n}\n\n.post-item__title a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.post-item__description {\n  margin-top: 16px;\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\nfooter {\n  border-top: 1px solid white;\n  background-color: var(--bg-color);\n  padding: 1em;\n  width: 100%;\n  text-align: center;\n}\n\nfooter ul {\n  margin: 0 auto;\n  display: inline-block;\n}\n\nfooter li {\n  display: inline-block;\n  margin: 0 1em;\n  font-size: 14px;\n}\n\nfooter a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #fff;\n}\n"],sourceRoot:""}]);const u=p},948:(n,r,t)=>{"use strict";t.d(r,{Z:()=>A});var e=t(537),o=t.n(e),i=t(645),a=t.n(i)()(o());a.push([n.id,"/* @media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    width: 300px;\r\n    position: absolute; */\r\n\r\n/* This trasform moves the drawer off canvas. */\r\n/* -webkit-transform: translate(-300px, 0);\r\n    transform: translate(-300px, 0); */\r\n\r\n/* Optionally, we animate the drawer. */\r\n/* transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n\r\n  .nav__item {\r\n    display: list-item;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .post-item__content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .post-item__title {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .post-item__description {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1.5rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n@media screen and (min-width: 1140px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n} */\r\n@media screen and (max-width: 840px) {\r\n  header {\r\n    padding: 15px 40px;\r\n  }\r\n  #menu-icon {\r\n    display: initial;\r\n    position: absolute;\r\n    padding: 15px 40px;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n  header nav .list {\r\n    position: absolute;\r\n    top: -400px;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    background-color: var(--bg-color);\r\n    transition: 0.3s;\r\n  }\r\n  header .list.active {\r\n    top: 70px;\r\n  }\r\n  .list a {\r\n    padding: 1rem;\r\n    display: block;\r\n  }\r\n  .nav-item {\r\n    display: list-item;\r\n    border-top: 1px solid #e0e0e0;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    /* grid-column-gap: 10px;\r\n      grid-row-gap: 16px; */\r\n    gap: 1.5rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    width: 300px;\r\n    position: absolute;\r\n\r\n    /* This trasform moves the drawer off canvas. */\r\n    -webkit-transform: translate(-300px, 0);\r\n    transform: translate(-300px, 0);\r\n\r\n    /* Optionally, we animate the drawer. */\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n\r\n  .nav__item {\r\n    display: list-item;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 455px) {\r\n  .headline__content {\r\n    padding: 16px 16px;\r\n  }\r\n\r\n  .headline__title {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .headline__description {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .headline__content {\r\n    margin: 0 auto;\r\n    max-width: 650px;\r\n  }\r\n\r\n  .post-item__content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .post-item__title {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .post-item__description {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .headline {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .headline__content {\r\n    padding: 16px 32px;\r\n  }\r\n\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1140px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;;;;;;;;;;;;;;yBAcyB;;AAEzB,+CAA+C;AAC/C;sCACsC;;AAEtC,uCAAuC;AACvC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAuDG;AACH;EACE;IACE,kBAAkB;EACpB;EACA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,QAAQ;EACV;EACA;IACE,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,iCAAiC;IACjC,gBAAgB;EAClB;EACA;IACE,SAAS;EACX;EACA;IACE,aAAa;IACb,cAAc;EAChB;EACA;IACE,kBAAkB;IAClB,6BAA6B;IAC7B,gCAAgC;IAChC,WAAW;IACX,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B;2BACuB;IACvB,WAAW;EACb;AACF;;AAEA;EACE;IACE,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;;IAElB,+CAA+C;IAC/C,uCAAuC;IACvC,+BAA+B;;IAE/B,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kCAAkC;IAClC,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,cAAc;EAChB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF",sourcesContent:["/* @media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    width: 300px;\r\n    position: absolute; */\r\n\r\n/* This trasform moves the drawer off canvas. */\r\n/* -webkit-transform: translate(-300px, 0);\r\n    transform: translate(-300px, 0); */\r\n\r\n/* Optionally, we animate the drawer. */\r\n/* transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n\r\n  .nav__item {\r\n    display: list-item;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .post-item__content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .post-item__title {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .post-item__description {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1.5rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n@media screen and (min-width: 1140px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n} */\r\n@media screen and (max-width: 840px) {\r\n  header {\r\n    padding: 15px 40px;\r\n  }\r\n  #menu-icon {\r\n    display: initial;\r\n    position: absolute;\r\n    padding: 15px 40px;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n  header nav .list {\r\n    position: absolute;\r\n    top: -400px;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    background-color: var(--bg-color);\r\n    transition: 0.3s;\r\n  }\r\n  header .list.active {\r\n    top: 70px;\r\n  }\r\n  .list a {\r\n    padding: 1rem;\r\n    display: block;\r\n  }\r\n  .nav-item {\r\n    display: list-item;\r\n    border-top: 1px solid #e0e0e0;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    /* grid-column-gap: 10px;\r\n      grid-row-gap: 16px; */\r\n    gap: 1.5rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    width: 300px;\r\n    position: absolute;\r\n\r\n    /* This trasform moves the drawer off canvas. */\r\n    -webkit-transform: translate(-300px, 0);\r\n    transform: translate(-300px, 0);\r\n\r\n    /* Optionally, we animate the drawer. */\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n\r\n  .nav__item {\r\n    display: list-item;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 455px) {\r\n  .headline__content {\r\n    padding: 16px 16px;\r\n  }\r\n\r\n  .headline__title {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .headline__description {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .headline__content {\r\n    margin: 0 auto;\r\n    max-width: 650px;\r\n  }\r\n\r\n  .post-item__content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .post-item__title {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .post-item__description {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .headline {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .headline__content {\r\n    padding: 16px 32px;\r\n  }\r\n\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1140px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const A=a},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:n=>{"use strict";n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{"use strict";n.exports=function(n){var r=n[1],t=n[3];if(!t)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},666:n=>{var r=function(n){"use strict";var r,t=Object.prototype,e=t.hasOwnProperty,o=Object.defineProperty||function(n,r,t){n[r]=t.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",A=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(n,r,t){return Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{c({},"")}catch(n){c=function(n,r,t){return n[r]=t}}function l(n,r,t,e){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),A=new z(e||[]);return o(a,"_invoke",{value:_(n,t,A)}),a}function p(n,r,t){try{return{type:"normal",arg:n.call(r,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var d="suspendedStart",u="suspendedYield",f="executing",m="completed",g={};function h(){}function C(){}function E(){}var x={};c(x,a,(function(){return this}));var B=Object.getPrototypeOf,v=B&&B(B(L([])));v&&v!==t&&e.call(v,a)&&(x=v);var b=E.prototype=h.prototype=Object.create(x);function y(n){["next","throw","return"].forEach((function(r){c(n,r,(function(n){return this._invoke(r,n)}))}))}function w(n,r){function t(o,i,a,A){var s=p(n[o],n,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(n){t("next",n,a,A)}),(function(n){t("throw",n,a,A)})):r.resolve(l).then((function(n){c.value=n,a(c)}),(function(n){return t("throw",n,a,A)}))}A(s.arg)}var i;o(this,"_invoke",{value:function(n,e){function o(){return new r((function(r,o){t(n,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(n,r,t){var e=d;return function(o,i){if(e===f)throw new Error("Generator is already running");if(e===m){if("throw"===o)throw i;return W()}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var A=k(a,t);if(A){if(A===g)continue;return A}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(e===d)throw e=m,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e=f;var s=p(n,r,t);if("normal"===s.type){if(e=t.done?m:u,s.arg===g)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(e=m,t.method="throw",t.arg=s.arg)}}}function k(n,t){var e=t.method,o=n.iterator[e];if(o===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=r,k(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),g;var i=p(o,n.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var a=i.arg;return a?a.done?(t[n.resultName]=a.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function I(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function j(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function z(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(I,this),this.reset(!0)}function L(n){if(n){var t=n[a];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function t(){for(;++o<n.length;)if(e.call(n,o))return t.value=n[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:W}}function W(){return{value:r,done:!0}}return C.prototype=E,o(b,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:C,configurable:!0}),C.displayName=c(E,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var r="function"==typeof n&&n.constructor;return!!r&&(r===C||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,E):(n.__proto__=E,c(n,s,"GeneratorFunction")),n.prototype=Object.create(b),n},n.awrap=function(n){return{__await:n}},y(w.prototype),c(w.prototype,A,(function(){return this})),n.AsyncIterator=w,n.async=function(r,t,e,o,i){void 0===i&&(i=Promise);var a=new w(l(r,t,e,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},y(b),c(b,s,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var r=Object(n),t=[];for(var e in r)t.push(e);return t.reverse(),function n(){for(;t.length;){var e=t.pop();if(e in r)return n.value=e,n.done=!1,n}return n.done=!0,n}},n.values=L,z.prototype={constructor:z,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function o(e,o){return A.type="throw",A.arg=n,t.next=e,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],A=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),c=e.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,r){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(n,r){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&r&&(this.next=r),g},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),j(t),g}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===n){var e=t.completion;if("throw"===e.type){var o=e.arg;j(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:L(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=r),g}},n}(n.exports);try{regeneratorRuntime=r}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},379:n=>{"use strict";var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],c=e.base?s[0]+e.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var d=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(u);else{var f=o(u,e);e.byIndex=A,r.splice(A,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);r[A].references--}for(var s=e(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:n=>{"use strict";var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{"use strict";n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},66:(n,r,t)=>{"use strict";n.exports=t.p+"198d07d4a138115e1f17.jpg"}},i={};function a(n){var r=i[n];if(void 0!==r)return r.exports;var t=i[n]={id:n,exports:{}};return o[n](t,t.exports,a),t.exports}a.m=o,a.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return a.d(r,{a:r}),r},r=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,a.t=function(t,e){if(1&e&&(t=this(t)),8&e)return t;if("object"==typeof t&&t){if(4&e&&t.__esModule)return t;if(16&e&&"function"==typeof t.then)return t}var o=Object.create(null);a.r(o);var i={};n=n||[null,r({}),r([]),r(r)];for(var A=2&e&&t;"object"==typeof A&&!~n.indexOf(A);A=r(A))Object.getOwnPropertyNames(A).forEach((n=>i[n]=()=>t[n]));return i.default=()=>t,a.d(o,i),o},a.d=(n,r)=>{for(var t in r)a.o(r,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},a.f={},a.e=n=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](n,r),r)),[])),a.u=n=>n+".bundle.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t={},e="restaurant-apps:",a.l=(n,r,o,i)=>{if(t[n])t[n].push(r);else{var A,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+o){A=p;break}}A||(s=!0,(A=document.createElement("script")).charset="utf-8",A.timeout=120,a.nc&&A.setAttribute("nonce",a.nc),A.setAttribute("data-webpack",e+o),A.src=n),t[n]=[r];var d=(r,e)=>{A.onerror=A.onload=null,clearTimeout(u);var o=t[n];if(delete t[n],A.parentNode&&A.parentNode.removeChild(A),o&&o.forEach((n=>n(e))),r)return r(e)},u=setTimeout(d.bind(null,void 0,{type:"timeout",target:A}),12e4);A.onerror=d.bind(null,A.onerror),A.onload=d.bind(null,A.onload),s&&document.head.appendChild(A)}},a.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var r=a.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),(()=>{a.b=document.baseURI||self.location.href;var n={143:0};a.f.j=(r,t)=>{var e=a.o(n,r)?n[r]:void 0;if(0!==e)if(e)t.push(e[2]);else{var o=new Promise(((t,o)=>e=n[r]=[t,o]));t.push(e[2]=o);var i=a.p+a.u(r),A=new Error;a.l(i,(t=>{if(a.o(n,r)&&(0!==(e=n[r])&&(n[r]=void 0),e)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;A.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",A.name="ChunkLoadError",A.type=o,A.request=i,e[1](A)}}),"chunk-"+r,r)}};var r=(r,t)=>{var e,o,[i,A,s]=t,c=0;if(i.some((r=>0!==n[r]))){for(e in A)a.o(A,e)&&(a.m[e]=A[e]);s&&s(a)}for(r&&r(t);c<i.length;c++)o=i[c],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0},t=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a.nc=void 0,(()=>{"use strict";a(666);var n=a(379),r=a.n(n),t=a(795),e=a.n(t),o=a(569),i=a.n(o),A=a(565),s=a.n(A),c=a(216),l=a.n(c),p=a(589),d=a.n(p),u=a(756),f={};f.styleTagTransform=d(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=e(),f.insertStyleElement=l(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var m=a(948),g={};g.styleTagTransform=d(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=e(),g.insertStyleElement=l(),r()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals,a.e(758).then(a.t.bind(a,758,19)).then((function(n){var r=n.default;console.log(r);var t=r.restaurants,e="";t.forEach((function(n){e+='\n        <article class="post-item">\n          <img class="image-tumbnail" src="'.concat(n.pictureId,'" alt="" />\n          <div class="post-item__content">\n            <h1 class="post-item__title">').concat(n.name,'</h1>\n            <p class="post-item__date">Location In ').concat(n.city," <br /> Rating ").concat(n.rating,'</p>\n            <p class="post-item__description">').concat(n.description,"</p>\n          </div>\n        </article>\n        ")})),document.querySelector(".posts").innerHTML=e}));var h=document.getElementById("menu-icon"),C=document.querySelector(".list");h.addEventListener("click",(function(){C.classList.toggle("active")})),window.onscroll=function(){C.classList.remove("active")}})()})();
//# sourceMappingURL=app.bundle.js.map