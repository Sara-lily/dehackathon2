function getBikes() {
	var bikeArray = JSON.parse(localStorage.getItem("bikeArray"));
	for (var i = 0; i < bikeArray.length; i++) {
		var bike = bikeArray[i];
		$("div#bikes").append('<table class="itemListing">\
		<thead class="frame-heading">\
		<tr>\
		<th style="text-align:left">\
		<span class="itemHeader">' + bike.makeDisplayName + '</span>\
		<th style="text-align:right">Actual Price: <span class="price">' + bike.price + '</span></th>\
		</th>\
		</tr>\
		</thead>\
		<tbody>\
		<tr>\
		<td>\
		<img class="itemImage small" src="' + bike.photos[0].url + '"/>\
		</td>\
		<td class="details"><span><div class="fb-share-button" data-href="' + bike.url + '" data-type="button"></div></span></td>\
		</tr>\
		</tbody>\
		</table>');
	}
}
