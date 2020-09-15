# DT173G - Moment 2 - NodeJs & Gulp

Lösning av Linus Hvenfelt.

## Automatiserings-processen

Konkatenerar alla css och javascript filer i mappen src. Kopierar sedan dessa nya kombinerade filer och html filer som finns till pub. Bilder som finns optimeras och läggs till i pub.

## Paket som används

* Gulp
* Gulp-concat - för att kombinera filer ihop till en fil
* Gulp-uglify-es - minifiera javascript
* Gulp-clean-css - minifiera CSS
* Gulp-imagemin - minifiera bilder, optimera kvalitén på dem
* Browser-sync - för att synkronisera webbläsaren med filerna och köra live reload

Det finns inga PNGs i src/imgs, men det går ändå att minifiera dessa om man vill. Bara att lägga in i mappen så fixas det.

**Det finns följande funktioner i gulpfile.js:**

* copyhtml - Kopierar över html filer till pub
* minifyJS - Minifierar och kombinerar JavaScript filer och kopierar över till pub
* minifyCSS - Minifierar och kombinerar CSS filer och kopierar över till pub
* minifyIMGS - Optimerar bilder till mindre storlek och kopierar över till pub

### För att klona och köra projektet, gör följande kommandon

All in one(ladda ner, init och kör):

```
git clone https://github.com/veglinus/DT173G_moment2.git && cd DT173G_moment2 && npm install && gulp
```

En i taget:

```
git clone https://github.com/veglinus/DT173G_moment2.git
cd DT173G_moment2
npm install
gulp
```
