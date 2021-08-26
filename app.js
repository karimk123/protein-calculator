$(() => {
	
	var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");


for (var i = 0; i < bubblyButtons.length;i++){
	bubblyButtons[i].addEventListener('click', animateButton, false);

}


// if(window.location.href == "http://127.0.0.1:5500/index.html"){

// 		Start()
// 		return
// }



	$("#header").hide();
	$("#header2").hide()
	$("#header3").hide()
	$("#start-btn").hide()
	$("#header").fadeIn(800);
	setTimeout(() =>{
			$("#header2").fadeIn(800);
	}, 3300)
	setTimeout(() =>{
			$("#header3").fadeIn(800);
			$("#start-btn").fadeIn(800)
			setTimeout(() => {
				
				$("#start-btn").css("transition", "0.3s")
			}, 800);
			updateCovidCases()
	}, 6300)
	



	
})

 function updateCovidCases(){
	fetch("https://api.covid19api.com/summary").then((response) =>{
		return response.json()
	}).then(data =>{
		let cases =  data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		$("#header3 span").text(cases)
	})
}


function Start(){
	setTimeout(() => {
		$("#intro").fadeOut(500)
		setTimeout(() => {
			$("#app").fadeIn(500)
			alertify.success("Note: You need at least 56g of protein everyday.")
		}, 500)
	}, 1000)
	
}
