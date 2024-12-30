### Offline Tierlist Maker

This is a simple webpage that allows creating custom "[Tierlists](https://knowyourmeme.com/memes/tier-lists)".

I was looking for a decent app that would allow me to do that offline without uploading my images to a server or requiring an account, but I couldn't find any, so I made one myself.

You can play with the latest version at [oskardotglobal.github.io/tiers](https://oskardotglobal.github.io/tiers), or you can download the repository and open `index.html` in your browser (in both cases, all the logic is run locally on your browser).

#### Features
- Give a title to your tierlist
- Import any number of pictures from your local disk
- Customize the tier names
- Customize the number of tiers
- Images are scaled to 250px max height and optimized as WEBP
- Export your tierlist as JSON and reimport it even from another PC (image data is embedded in the save file)
- Import JSON tierlists and presets from any URL using the `?load=` url parameter
  - A Programming language preset is included which can be loaded using `?load=presets/langs.json`

If you'd like to propose any feature, feel free to open a PR. I probably won't have time to follow issues closely or add much stuff myself though.

### Using this Tierlist Maker

You are allowed to use this Tierlist Maker however you wish (including YouTube videos, images, memes, embedding it in your website, etc).
