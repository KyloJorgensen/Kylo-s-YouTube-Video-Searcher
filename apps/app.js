$(document).ready(function() {
	'use strict';

	var controller = {
		init: function() {
			view.init();
		},

		searchResults: function(searchTerm) {
			model.getRequest(searchTerm);
		},

		generateResults: function(results) {
			view.showResults(results)
		}
	}

	var model = {
		getRequest: function(searchTerm) {
			var params = {
				part: 'snippet',
				key: 'AIzaSyDHCMF4v4Nf78cmYalbUCd46r_4HFCdMHw',
				q: searchTerm,
				r: 'json'
			},
				url = 'https://www.googleapis.com/youtube/v3/search';

			$.getJSON(url, params, function(results) {
				console.log(results);
				controller.generateResults(results.items);
			});
		}
	}
	
	var view = {
		init: function() {
			$('form').submit(function() {
				event.preventDefault();
				var searchTerm = $('.search-term').val();
				controller.searchResults(searchTerm);
			});
		},

		showResults: function(results) {
			var ul = '';

			$.each(results, function(index, value) {
				ul += '<li><div class="video-result"><div class="thumbnail"><a href="https://www.youtube.com/watch?v=' +
					value.id.videoId + '"><img src=' + value.snippet.thumbnails.medium.url + ' alt=' + value.snippet.title +
					'></a></div><div class="videoInfo"><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '">' +
					value.snippet.title + '</a><a href="https://www.youtube.com/channel/' + value.snippet.channelId +'">' +
					value.snippet.channelTitle + '</a><p>' + value.snippet.description + '</p></div></div></li>';
			});

			$('ul').empty().append(ul);
		}
	};

	controller.init();
});
