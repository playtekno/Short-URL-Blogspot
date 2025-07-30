
# Skrip Short URL Blogspot

```
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
```
## Deskripsi

Skrip JavaScript ini memungkinkan Anda untuk membuat URL pendek untuk situs Blogspot Anda. Pengguna dapat mengakses tautan tertentu dengan menambahkan pengidentifikasi unik ke URL.

## Fitur

- Mengarahkan pengguna ke URL yang ditentukan berdasarkan kunci.
- Sederhana dan mudah diintegrasikan ke dalam situs Blogspot Anda.

## Instalasi

1. **Salin Skrip:**
   Salin kode JavaScript yang disediakan ke dalam widget HTML/Javascript Blogspot Anda atau langsung ke dalam template HTML Anda.

2. **Modifikasi Pemetaan URL:**
   Dalam objek `urls` di dalam skrip, Anda dapat menambahkan atau memodifikasi kunci dan URL tujuan yang sesuai. Formatnya adalah:
  ```
'fb': 'https://www.facebook.com/playtekno.biz.id',
  'vcc': 'https://www.playtekno.biz.id/2025/07/bank-digital-indonesia-penyedia-vcc-terbaik-2025.html'
  ```

3. **Menggunakan Skrip:**
   Untuk menggunakan short URL, tambahkan `o/{kunci}` ke URL Blogspot Anda. Contohnya:
   ```
   https://bloganda.blogspot.com/o/vcc
   ```
   Ini akan mengarahkan pengguna ke
    ```
   https://www.playtekno.biz.id/2025/07/bank-digital-indonesia-penyedia-vcc-terbaik-2025.html`
    ```

## Contoh

Jika Anda ingin membuat URL pendek untuk GitHub, Anda dapat mengakses:
```
https://bloganda.blogspot.com/o/github
```
Ini akan mengarahkan ke `https://github.com/playtekno`.

## Penanganan Kesalahan

Jika kunci tidak cocok dengan entri mana pun di objek `urls`, skrip akan menampilkan pesan:
```
'{kunci}' tidak ditemukan :(
```

## Dukungan dan Donasi

Kami sangat menghargai dukungan Anda yang berkelanjutan! Jika Anda menikmati konten yang kami sajikan dan ingin membantu kami terus berkembang, pertimbangkan untuk memberikan donasi. Setiap kontribusi, besar atau kecil, sangat berarti bagi kami. Anda dapat memberikan donasi melalui link berikut: [Dukung Kami](https://lynk.id/hendygital/s/e8n3rm42rj39). Terima kasih atas perhatian dan kebaikan hati Anda!

## Lisensi

Skrip ini dilisensikan di bawah Lisensi Playtekno. Anda bebas memodifikasi dan menggunakannya sesuai kebutuhan.
```
