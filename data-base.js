// helper functions 
// =======================
// writing each function
function each(coll, fn) {
	if (Array.isArray(coll) || typeof coll === 'string'){
		for (var i = 0; i < coll.length; i++) {
			fn(coll[i], i)
		}
	} else {
		for (var key in coll) {
			fn(coll[key], key)
		}
	}
}


// create the game interface
function create(arr, fn) {
	each(arr, function (elem, i) {
		var frame = $('#frame');
		var elem1 = $('<div class="imgs"></div>');
		
		frame.append(elem1);
	})
}
// function create(arr) {
// 	each(arr, function(elem, i) {
// 		var frame = $('#frame');
// 		var elem1 = $('<div class="imgs"></div>');
// 		// if(elem > 8){
// 		// 	elem -= 8;
// 		// }
// 		elem1.attr("class", elem);
// 		//elem1.html('<img scr="images[elem]">');
// 		frame.append(elem1);
		
// 	});
// }

//

/*
var images = ["https://www.flaticon.com/svg/static/icons/svg/3456/3456656.svg", "https://www.flaticon.com/svg/static/icons/svg/3456/3456709.svg","https://www.flaticon.com/svg/static/icons/svg/3456/3456669.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456847.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456890.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456805.svg","https://www.flaticon.com/premium-icon/icons/svg/3457/3457010.svg", "https://www.flaticon.com/premium-icon/icons/svg/3456/3456953.svg" ]*/