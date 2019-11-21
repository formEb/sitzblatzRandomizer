var htmlTableObjects = document.getElementsByClassName("table");
var studentNames = ["Finn","Greta","Linus","Lukas","Arne","Dayana","Erik","Jens","Kevin","Lars","Leonie","Lolita","Lorena","Maalin","Milan","Ronja","Tewes","Vincent","Timo","Jan"];

for(let i = 0; i < studentNames.length; i++) {
    htmlTableObjects[i].innerHTML = studentNames[seats[i]]
}
