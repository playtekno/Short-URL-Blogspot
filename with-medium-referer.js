<script language='javascript'>

// @package bshort.JS

// @author Hendy Black

// @license Playtekno License

//<![CDATA[

var keyRaw = window.location.href.split("o/")[1].replace("/", "");

// Hilangkan query parameter jika ada (contoh: ?fbclid=...)

var key = keyRaw.split("?")[0].toLowerCase();

var urls = {

'fb': 'https://www.facebook.com/playtekno.biz.id',

'github': 'https://github.com/playtekno'

};

if (key && urls[key]) {

var targetURL = urls[key];

var googleRedirect = "https://medium.com/r?url=" + encodeURIComponent(targetURL);

window.location.replace(googleRedirect);

} else {

document.write("'" + key + "' not found :(");

}

//]]>

</script>
