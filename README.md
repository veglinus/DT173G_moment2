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

Det finns inga PNGs i src/imgs, men det går ändå att minifiera dessa om man vill. Bara att lägga in i mappen så fixas det.

### För att klona och köra projektet, gör följande kommandon

All in one(ladda ner, init och kör):

```git clone https://github.com/veglinus/DT173G_moment2.git && cd DT173G_moment2 && npm install && gulp

```

En i taget:

```git clone git clone https://github.com/veglinus/DT173G_moment2.git
cd DT173G_moment2
npm init
gulp
```
