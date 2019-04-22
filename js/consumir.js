

/*======  Consumo de Api Pixabay  ======*/


$("#botonBuscar").on("click", function()
{

	var contenido = "";

	var buscar = $("#buscar").val();

	var llave = "4143827-f6888483f0517e891ec3f1b4c";

	var direccion = "https://pixabay.com/api/?key=" + llave + "&q=" + buscar;

	$("#resultado").text("Cargando...");

	$.getJSON(direccion, function(datos)
	{

		$.each(datos.hits, function(i, hit)
		{

			contenido += "<div class = 'col-xl-3 col-lg-4 col-sm-6 col-12'>";
			contenido += 	"<div class = 'card tarjeta'>";
			contenido += 		"<img src = '" + hit.previewURL + "'>";
			contenido +=		"<div class = 'card-body'>";
			contenido += 			"<h5 class = 'card-title color'>" + hit.user + "</h5>";
			contenido +=			"<a href = 'https://www.pixabay.com' class = 'text-success'>www.pixabay.com</a>";
			contenido +=			"<p class = 'card-text text-dark'>" + hit.tags + "</p>";
			contenido += 		"</div>";
			contenido += 	"</div>";
			contenido += "</div>";

		});

		$("#resultado").html(contenido);

		$("#buscar").val("");		 

	});

});

