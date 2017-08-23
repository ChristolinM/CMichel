/*Today's exercise:


[8:46] 
Build a function called chooseDoor with an argument
Build a conditional in your function that enters messages into the console log if the user runs the function with set arguments:
1: "You win an appleTV"
2: "You win a MacBook Pro"
3: "You win a MacBook Pro"
Else:  "Better luck next time" */

/* Assignment */
function chooseDoor(choice){
	switch (choice){
		case 1:
		console.log("You win an appleTV");
		break;
		
		case 2: case 3:
		console.log("You win a MacBook Pro");
		break;

		default:
		console.log("Better luck next time");
	}
}

/* Annoying Popup Ads */
function chooseDoor2(choice){
	switch (choice){
		case 1:
		alert("You win an appleTV");
		break;
		
		case 2: case 3:
		alert("You win a MacBook Pro");
		break;

		default:
		alert("Better luck next time");
	}
}