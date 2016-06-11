$(document).ready(function() {
	$(function(){
		$('form').submit(function() {
			event.preventDefault();
			var searchTerm = $('.search-term').val();
			getRequest(searchTerm);
		});
	})

	function getRequest(searchTerm) {
		var params = {
			part: 'snippet',
			key: 'AIzaSyDHCMF4v4Nf78cmYalbUCd46r_4HFCdMHw',
			q: searchTerm,
			r: 'json'
		};
		url = 'https://www.googleapis.com/youtube/v3/search';

		$.getJSON(url, params, function(data) {
			console.log(data);
			showResults(data.items);
		});
	}

	function showResults(results) {
		var ul = '',
			videoTitle = '',
			videoId = '',
			channelTitle = '',
			channelId = '',
			thumbnail = {};

		$.each(results, function(index, value) {
			ul += '<li><div class="video-result"><div class="thumbnail"><img src=' + value.snippet.thumbnails.medium.url + ' alt=""></div><div class="videoInfo"><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '">' + value.snippet.title + '</a><a href="https://www.youtube.com/channel/' + value.snippet.channelId +'">' + value.snippet.channelTitle + '</a><p>' + value.snippet.description + '</p></div></div></li>';
	videoTitle += '<p>' + value.Title + '</p>';
			console.log(value.Title);
		});

		$('ul').empty().append(ul);
	}

});


// 'https://www.youtube.com/watch?v=' + videoId
// 'https://www.youtube.com/channel/' + channelId
// 	items:Array[5]
// 		0:Object
// 			id:Object
// 				videoId:"VEfiBct-39w"
// 			snippet:Object
// 				channelId:"UC0gNKhFMg-bKyNNZ_MB3D9Q"
// 				channelTitle:"Webs & Tiaras - Toy Monster Compilations"
// 				description:"Frozen Elsa, Anna & Pink Spidergirl vs Maleficent! w/ Spiderman, Catwoman, Ariel Mermaid & Batman! Superheroes In Real Life by Webs & Tiaras :) Watch ..."
// 				thumbnails:Object
// 					default:Object
// 						height: 90
// 						url: "https://i.ytimg.com/vi/VEfiBct-39w/default.jpg"
// 						width: 120
// 					high:Object
// 					medium:Object
// 				title:"Frozen Elsa, Anna & Pink Spidergirl vs Maleficent! w/ Spiderman, Catwoman, Ariel Mermaid & Batman :)"


// https://www.youtube.com/channel/
