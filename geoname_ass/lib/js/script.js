$(window).on('load', function () { 
    if ($('#preloader').length) {  
     $('#preloader').delay(800).fadeOut('slow', function () {  
         $(this).remove();     
      }); 
}});

$('#Interestingbtn').click(function() {

    $.ajax({
        url: "lib/php/interestingPlaces.php",
        type: 'POST',
        dataType: 'json',
        data: {
            geonameId: $('.country2:checked').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#paris').html(result['data'][0]['name']);
                $('#london').html(result['data'][1]['name']);
                $('#moscow').html(result['data'][2]['name']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("error");
            
            
        }
    });

});




$('#touristbtn').click(function() {

	$.ajax({
		url: "lib/php/wiki.php",
		type: 'POST',
		dataType: 'json',
		data: {
			city: $('#tourcity').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {
				
				$('#touristcityloc').html(result['data']['geonames'][0]['summary']);		
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("error");
		}
	}); 
});

$('#populationbtn').click(function() {

    $.ajax({
        url: "lib/php/population.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat:$('#latitude').val(),
            lng: $('#longitude').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#cityname').html(result['data'][0]['toponymName']);
                $('#ctryname').html(result['data'][0]['countryName']);			

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("error");
            
        }
    }); 


});
