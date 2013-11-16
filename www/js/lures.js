// JavaScript Document

function getLures()
{
	$.getJSON("lures.json", function(lures){
	$('#lureList li').remove(); /*Remove list items, then run forloop*/	
	//alert(lures[1].brand);
	//alert(lures.length);
	
	for (var i=0; i<lures.length; i++)
	{
		document.getElementById('lureList').innerHTML +=
		'<li>' + '<a href="'+lures[i].page+'">' + 
		'<h1>' + lures[i].brand + '</h1>' +
		'<img src="'+lures[i].image+'">' +
		'<p>' + lures[i].lureName + '</p>' + '</a>' + '</li>'
	}
	
	$('#lureList').listview('refresh'); /*refresh the listview */
		
	});
}