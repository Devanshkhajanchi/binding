let articleLink = document.getElementById("link");
let titleBox = document.getElementById("title");
let articleAuthor = document.getElementById("author");
let initials = document.getElementById("initials")
let articleBackground = document.getElementById("articles")
let articleNum = Math.floor(Math.random()*3) + 1

if(articleNum==1){
	articleLink.href = "call-for-criticism/index.html"
	titleBox.innerHTML = 'Call for Criticism'
	articleAuthor.innerHTML = 'Massimo Vignelli, 1983'
	initials.innerHTML = 'CC'
	articleBackground.style.backgroundColor = "#FB01F1"
}

else if (articleNum==2){
	titleBox.innerHTML = 'Graphic Design Criticism as a Spectator Sport.'
	articleLink.href = "graphic-design-criticism-as-a-spectator-sport/index.html"
	articleAuthor.innerHTML = 'Michael Bierut, 2013'
	initials.innerHTML = 'SS'
	articleBackground.style.backgroundColor = "#EDE716"
}

else {
	titleBox.innerHTML = 'You’ll Never Guess the Amazing Ways Online Design Writing and Criticism Has Changed.'

	articleLink.href = "youll-never-guess-the-amazing-ways-online-design-criticism-and-writing-has-changed/index.html"
	articleAuthor.innerHTML = 'Chappell Ellison, 2014'
	initials.innerHTML = 'DC'
	articleBackground.style.backgroundColor = "#6583FC"
}

