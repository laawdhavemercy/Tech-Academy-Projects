function my_Dictionary() {
	var TV = {
		Show:"Spongebob Squarepants",
		Character:"Spongebob",
		Color:"Yellow",
		Work:"Krusty Krab",
		Job:"Chef",
};
delete TV.Job;
document.getElementById("Dictionary").innerHTML = TV.Work;
}