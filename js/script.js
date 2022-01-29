
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
