
document.body.style.background = "hsl(217, 54%, 11%)";  //body
// document.body.style.display = "flex";
//document.body.style.minWidth = '1440px';
//document.body.style.fontFamily = 'Outfit, sans-serif';
//document.body.style.fontSize = '18px';
//document.body.style.margin = '0';


// wrapper
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.append(wrapper);
wrapper.style.marginTop = "100px";
wrapper.style.marginBottom = "100px";
wrapper.style.fontFamily = "Outfit";
wrapper.style.width = "340px";
wrapper.style.height = "600px";
wrapper.style.backgroundColor = "hsl(216, 50%, 16%)";
wrapper.style.borderRadius = "15px";
wrapper.style.margin = "auto";
wrapper.style.boxShadow = "0px 15px 10px 15px hsl(233, 45%, 10%)";
//img
const image = document.createElement("img");
wrapper.append(image);
image.setAttribute("src", "./images/image-equilibrium.jpg");
image.style.width = "300px";
image.style.height = "300px";
image.style.borderRadius = "15px";
image.style.marginLeft = "20px";
image.style.marginTop = "20px";

//h3
const title = document.createElement("h3");
wrapper.append(title);
title.innerText = "Equilibrium #3429";
title.style.color = "white";
title.style.fontSize = "21px";
title.style.fontFamily = "Outfit";
title.style.fontWeight = "600";
title.style.marginLeft = "20px";
title.style.marginTop = "20px";
title.style.textDecoration = "none";
title.style.display = "Block";


//paragraph
const text = document.createElement("p");
wrapper.append(text);
text.innerText = "Our Equilibrium collection promotes balance and calm";
text.style.fontSize = "18px";
text.style.fontFamily = "Outfit";
text.style.fontWeight = "300";
text.style.color = "hsl(215, 32%, 35%)";
text.style.marginLeft = "20px";

//footer-sides
const innerWrapper = document.createElement("ul");
wrapper.append(innerWrapper);
innerWrapper.className = "innerWrapper";
innerWrapper.style.display = "flex";
innerWrapper.style.justifyContent = "space-around";
innerWrapper.style.listStyle = "none";

//balance
const innerItem = document.createElement("li");
innerWrapper.append(innerItem);
innerItem.innerText = "0.041ETH";
innerItem.style.color = "hsl(178, 100%, 50%)";
innerItem.style.fontFamily = "Outfit";
innerItem.style.fontWeight = "400";
innerItem.style.fontSize = "18px";
innerItem.style.marginLeft = "-50px";


//balanceIcon
const icon = document.createElement("img");
icon.setAttribute("src", "images/icon-ethereum.svg");
innerItem.append(icon);
icon.style.top = "466px";
icon.style.left = "525px";
icon.style.position = "absolute";


//time
const innerItem2 = document.createElement("li");
innerWrapper.append(innerItem2);
innerItem2.innerText = "3 days left";
innerItem2.style.fontFamily = "Outfit";
innerItem2.style.fontWeight = "400";
innerItem2.style.fontSize = "18px";
innerItem2.style.color = "hsl(215, 51%, 70%)";

//timeIcon
const icon2 = document.createElement("img");
icon2.setAttribute("src", "images/icon-clock.svg");
innerItem2.append(icon2);
icon2.style.top = "466px";
icon2.style.left = "695px";
icon2.style.position = "absolute";


//line
const line = document.createElement("hr");
wrapper.append(line);
line.style.width = "300px";
line.style.border = ".2px solid hsl(215, 32%, 35%) ";
line.style.marginTop = "20px";


//ava
const ava = document.createElement("img");
wrapper.append(ava);
ava.setAttribute("src", " images/image-avatar.png");
ava.style.width = "40px";
ava.style.border = "1px solid white";
ava.style.borderRadius = "50%";
ava.style.marginLeft = "20px";
ava.style.marginTop = "15px";



//span
const span = document.createElement("span");
wrapper.append(span);
span.innerText = "Creation of";
span.style.color = "hsl(215, 32%, 40%)";
span.style.fontFamily = "Outfit";
span.style.fontWeigth = "400";
span.style.fontSize = "18px";
span.style.marginLeft = "75px";
span.style.marginTop = "-32px";
span.style.display = "block";

//cite
const cite = document.createElement("cite");
span.appendChild(cite);
cite.innerText = "Jules Wyvern";
cite.style.color = "white";
cite.style.textDecoration = "none";
cite.style.fontWeight = "400";
cite.style.marginLeft = "8px";
