# HTML Component

![Github Release](https://img.shields.io/github/v/release/wildpeaks/package-preact-component-html.svg?label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=11abfb)

Stateless HTML5 Preact component, useful for static rendering full pages.

Install:

	npm install @wildpeaks/preact-component-html

Component props:

 - `title`: page title
 - `js`: JS code embedded directly
 - `css`: CSS code embedded directly
 - `scripts`: async external scripts
 - `stylesheets`: external stylesheets
 - `favicon`: URL of the favicon image
 - `canonical`: Absolute URL of the current page
 - `lang`: language identifier (defaults to `en`)
 - `viewport`: meta viewport size (defaults to `width=device-width, initial-scale=1, shrink-to-fit=no`)


Example:

````js
const render = require('preact-render-to-string');
const HTML = require('@wildpeaks/preact-component-html');

const stylesheets = [
	'styles.css',
	'https://cdn.example.com/webfont.css'
];
render(
	<HTML title="Header title" scripts={['script1.js', 'script2.js']} stylesheets="styles.css">
		<article>
			<h1>Title of the article</h1>
			<p>Hello World</p>
		</article>
	</HTML>
);
````

Children elements are placed in the `<body>` (except `<meta>`, `<style>`, and `<link>` tags that get added to the `<head>`):

````js
<HTML title="Example page" canonical="https://www.example.com/">
	<link rel="alternate" href="https://fr.example.com/" hreflang="fr"/>
	<p>Hello world</p>
</HTML>
````
