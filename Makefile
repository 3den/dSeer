init:
	browserify -t reactify app.js -o bundle.js
	uglifyjs bundle.js -o bundle.min.js
