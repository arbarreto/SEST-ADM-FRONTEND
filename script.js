$(document).ready(function(){
	
	$('[data-toggle="tooltip"]').tooltip();
	
    const baseurl = 'localhost:3000'

    fetch(`${baseurl}/getVideos`)
    .then((response) => response.json())
    .then((data) => {
        console.log(`sdsd: ${data}`)
    })
    .catch((error) => console.error('Whoops! Erro:', error.message || error))
});