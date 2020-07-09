function calcBmi(height,weight){
	//calculating bmi by formula : bmi=weight/(height in meter)square, and fixing to 2decimals
	let bmi=(weight/Math.pow(height/100,2)).toFixed(1);
	/*checking result according to bmi sections, tried to use switch but it was taking too much time :D
	i will update after sometime*/
	if(bmi<18.5){
		return "Your BMI is "+bmi+" ,Underweighted Eat more Sleep more !";
		}else if(18.5<=bmi && bmi<25){
			return "Your BMI is "+bmi+" ,Normal, wierd :D ";
			}else if(25<= bmi && bmi <29.9){
				return "Your BMI is "+bmi+" ,Overweighted not that much but walking, jogging is needed";
				}else if(bmi>30){
					return "Your BMI is "+bmi+" Obese, need to workout right now !";
	}
	
}

function bmiSubmit(event) {
	
  // stop the form from submitting, 
  event.preventDefault();
  
  // get the height from the input form
  let height = document.getElementById("bmi-height").value;
  
  //get the weight from the input form
  let weight = document.getElementById("bmi-weight").value;
  
  // call the calcBmi function
  let bmiResult = calcBmi(height, weight);
 // i clicked empty, it gives 'undefined', so checking here  
  if(typeof bmiResult !== 'undefined'){
	   // update with the result
	    let bmiElement = document.getElementById("bmi-result");
		bmiElement.innerHTML = "<h4>" + bmiResult + "</h4>";
  }else{
	  let bmiElement = document.getElementById("bmi-result");
		bmiElement.innerHTML = "<h4>You did not filled Height and Weight </h4>";
  }

  //clear form
  document.getElementById("bmi-calculator").reset();
  document.getElementById("bmi-button").blur();
}

// add the bmiSubmit function to form
let bmiForm = document.getElementById("bmi-calculator");
bmiForm.onsubmit = bmiSubmit;
