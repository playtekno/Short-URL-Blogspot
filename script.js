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
  'vcc': 'https://www.playtekno.biz.id/2025/07/bank-digital-indonesia-penyedia-vcc-terbaik-2025.html'
};

if (key && urls[key]) {
  var targetURL = urls[key];
  window.location.replace(targetURL); // Redirect directly to the target URL
} else {
  document.write("'" + key + "' not found :(");
}
//]]>
</script>
