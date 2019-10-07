'use strict';
/* eslint-env node, mocha */
/* eslint-disable no-undefined */
/* eslint-disable no-sync */
const fs = require('fs');
const path = require('path');
const {deepStrictEqual} = require('assert');
const {JSDOM} = require('jsdom');
const {h} = require('preact');
const renderToStaticMarkup = require('preact-render-to-string');
const {toJSON} = require('@wildpeaks/snapshot-dom');
const HTML = require('..');


function actual(element){
	const html = renderToStaticMarkup(element);
	const dom = new JSDOM(html);
	return toJSON(dom.window.document.documentElement);
}

function expected(filename){
	const filepath = path.join(__dirname, filename);
	return JSON.parse(fs.readFileSync(filepath, 'utf8'));
}


describe('@wildpeaks/preact-component-html', () => {
	it('Default props', () => {
		deepStrictEqual(
			actual(h(HTML)),
			expected('default_props.json')
		);
	});

	it('Title: "Hello"', () => {
		deepStrictEqual(
			actual(h(HTML, {title: 'Hello'})),
			expected('title_hello.json')
		);
	});
	it('Title: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {title: ''})),
			expected('default_props.json')
		);
	});
	it('Title: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {title: ' '})),
			expected('default_props.json')
		);
	});
	it('Title: false', () => {
		deepStrictEqual(
			actual(h(HTML, {title: false})),
			expected('default_props.json')
		);
	});
	it('Title: true', () => {
		deepStrictEqual(
			actual(h(HTML, {title: true})),
			expected('default_props.json')
		);
	});
	it('Title: null', () => {
		deepStrictEqual(
			actual(h(HTML, {title: null})),
			expected('default_props.json')
		);
	});
	it('Title: undefined', () => {
		deepStrictEqual(
			actual(h(HTML, {title: undefined})),
			expected('default_props.json')
		);
	});

	it('JS: "hello()"', () => {
		deepStrictEqual(
			actual(h(HTML, {js: 'hello()'})),
			expected('js_string.json')
		);
	});
	it('JS: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {js: ''})),
			expected('default_props.json')
		);
	});
	it('JS: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {js: ' '})),
			expected('default_props.json')
		);
	});
	it('JS: false', () => {
		deepStrictEqual(
			actual(h(HTML, {js: false})),
			expected('default_props.json')
		);
	});
	it('JS: true', () => {
		deepStrictEqual(
			actual(h(HTML, {js: true})),
			expected('default_props.json')
		);
	});
	it('JS: null', () => {
		deepStrictEqual(
			actual(h(HTML, {js: null})),
			expected('default_props.json')
		);
	});

	it('Scripts: "hello.js"', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: 'hello.js'})),
			expected('scripts_string.json')
		);
	});
	it('Scripts: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: ''})),
			expected('default_props.json')
		);
	});
	it('Scripts: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: ' '})),
			expected('default_props.json')
		);
	});
	it('Scripts: false', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: false})),
			expected('default_props.json')
		);
	});
	it('Scripts: true', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: true})),
			expected('default_props.json')
		);
	});
	it('Scripts: null', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: null})),
			expected('default_props.json')
		);
	});
	it('Scripts: undefined', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: undefined})),
			expected('default_props.json')
		);
	});

	it('Scripts: [""]', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: ['']})),
			expected('default_props.json')
		);
	});
	it('Scripts: [" "]', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: [' ']})),
			expected('default_props.json')
		);
	});
	it('Scripts: ["hello.js"]', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: ['hello.js']})),
			expected('scripts_string.json')
		);
	});
	it('Scripts: ["hello.js", "world.js"]', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: ['hello.js', 'world.js']})),
			expected('scripts_array.json')
		);
	});
	it('Scripts: [true, "hello.js", 123, null, undefined, false]', () => {
		deepStrictEqual(
			actual(h(HTML, {scripts: [true, 'hello.js', 123, null, undefined, false]})),
			expected('scripts_string.json')
		);
	});

	it('CSS: ".hello{}"', () => {
		deepStrictEqual(
			actual(h(HTML, {css: '.hello{}'})),
			expected('css_string.json')
		);
	});
	it('CSS: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {css: ''})),
			expected('default_props.json')
		);
	});
	it('CSS: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {css: ' '})),
			expected('default_props.json')
		);
	});
	it('CSS: false', () => {
		deepStrictEqual(
			actual(h(HTML, {css: false})),
			expected('default_props.json')
		);
	});
	it('CSS: true', () => {
		deepStrictEqual(
			actual(h(HTML, {css: true})),
			expected('default_props.json')
		);
	});
	it('CSS: null', () => {
		deepStrictEqual(
			actual(h(HTML, {css: null})),
			expected('default_props.json')
		);
	});

	it('Stylesheets: "hello.css"', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: 'hello.css'})),
			expected('stylesheets_string.json')
		);
	});
	it('Stylesheets: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: ''})),
			expected('default_props.json')
		);
	});
	it('Stylesheets: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: ' '})),
			expected('default_props.json')
		);
	});
	it('Stylesheets: false', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: false})),
			expected('default_props.json')
		);
	});
	it('Stylesheets: true', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: true})),
			expected('default_props.json')
		);
	});
	it('Stylesheets: null', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: null})),
			expected('default_props.json')
		);
	});
	it('Stylesheets: undefined', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: undefined})),
			expected('default_props.json')
		);
	});

	it('Stylesheets: [""]', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: ['']})),
			expected('default_props.json')
		);
	});
	it('Stylesheets: [" "]', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: [' ']})),
			expected('default_props.json')
		);
	});
	it('Stylesheets: ["hello.css"]', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: ['hello.css']})),
			expected('stylesheets_string.json')
		);
	});
	it('Stylesheets: ["hello.css", "world.css"]', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: ['hello.css', 'world.css']})),
			expected('stylesheets_array.json')
		);
	});
	it('Stylesheets: [true, "hello.css", 123, null, undefined, false]', () => {
		deepStrictEqual(
			actual(h(HTML, {stylesheets: [true, 'hello.css', 123, null, undefined, false]})),
			expected('stylesheets_string.json')
		);
	});

	it('Lang: "hello"', () => {
		deepStrictEqual(
			actual(h(HTML, {lang: 'hello'})),
			expected('lang_hello.json')
		);
	});
	it('Lang: " hello  "', () => {
		deepStrictEqual(
			actual(h(HTML, {lang: ' hello  '})),
			expected('lang_hello.json')
		);
	});
	it('Lang: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {lang: ''})),
			expected('lang_empty.json')
		);
	});
	it('Lang: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {lang: ' '})),
			expected('lang_empty.json')
		);
	});
	it('Lang: false', () => {
		deepStrictEqual(
			actual(h(HTML, {lang: false})),
			expected('lang_empty.json')
		);
	});
	it('Lang: true', () => {
		deepStrictEqual(
			actual(h(HTML, {lang: true})),
			expected('lang_empty.json')
		);
	});
	it('Lang: null', () => {
		deepStrictEqual(
			actual(h(HTML, {lang: null})),
			expected('lang_empty.json')
		);
	});
	it('Lang: undefined', () => {
		deepStrictEqual(
			actual(h(HTML, {lang: undefined})),
			expected('lang_default.json')
		);
	});

	it('Favicon: "hello.png"', () => {
		deepStrictEqual(
			actual(h(HTML, {favicon: 'hello.png'})),
			expected('favicon_hello.json')
		);
	});
	it('Favicon: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {favicon: ''})),
			expected('default_props.json')
		);
	});
	it('Favicon: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {favicon: ' '})),
			expected('default_props.json')
		);
	});
	it('Favicon: false', () => {
		deepStrictEqual(
			actual(h(HTML, {favicon: false})),
			expected('default_props.json')
		);
	});
	it('Favicon: true', () => {
		deepStrictEqual(
			actual(h(HTML, {favicon: true})),
			expected('default_props.json')
		);
	});
	it('Favicon: null', () => {
		deepStrictEqual(
			actual(h(HTML, {favicon: null})),
			expected('default_props.json')
		);
	});
	it('Favicon: undefined', () => {
		deepStrictEqual(
			actual(h(HTML, {favicon: undefined})),
			expected('default_props.json')
		);
	});

	it('Viewport: "hello"', () => {
		deepStrictEqual(
			actual(h(HTML, {viewport: 'hello'})),
			expected('viewport_hello.json')
		);
	});
	it('Viewport: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {viewport: ''})),
			expected('viewport_empty.json')
		);
	});
	it('Viewport: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {viewport: ' '})),
			expected('viewport_empty.json')
		);
	});
	it('Viewport: false', () => {
		deepStrictEqual(
			actual(h(HTML, {viewport: false})),
			expected('viewport_empty.json')
		);
	});
	it('Viewport: true', () => {
		deepStrictEqual(
			actual(h(HTML, {viewport: true})),
			expected('viewport_empty.json')
		);
	});
	it('Viewport: null', () => {
		deepStrictEqual(
			actual(h(HTML, {viewport: null})),
			expected('viewport_empty.json')
		);
	});
	it('Viewport: undefined', () => {
		deepStrictEqual(
			actual(h(HTML, {viewport: undefined})),
			expected('viewport_default.json')
		);
	});

	it('Canonical: "hello"', () => {
		deepStrictEqual(
			actual(h(HTML, {canonical: 'hello'})),
			expected('canonical_hello.json')
		);
	});
	it('Canonical: ""', () => {
		deepStrictEqual(
			actual(h(HTML, {canonical: ''})),
			expected('default_props.json')
		);
	});
	it('Canonical: " "', () => {
		deepStrictEqual(
			actual(h(HTML, {canonical: ' '})),
			expected('default_props.json')
		);
	});
	it('Canonical: false', () => {
		deepStrictEqual(
			actual(h(HTML, {canonical: false})),
			expected('default_props.json')
		);
	});
	it('Canonical: true', () => {
		deepStrictEqual(
			actual(h(HTML, {canonical: true})),
			expected('default_props.json')
		);
	});
	it('Canonical: null', () => {
		deepStrictEqual(
			actual(h(HTML, {canonical: null})),
			expected('default_props.json')
		);
	});
	it('Canonical: undefined', () => {
		deepStrictEqual(
			actual(h(HTML, {canonical: undefined})),
			expected('default_props.json')
		);
	});

	it('Children: div', () => {
		deepStrictEqual(
			actual(h(
				HTML,
				null,
				[
					h('div', {className: 'hello'})
				]
			)),
			expected('children_single.json')
		);
	});
	it('Children: div, p, article', () => {
		deepStrictEqual(
			actual(h(HTML, null, h('div'), h('p'), h('article'))),
			expected('children_multiple.json')
		);
	});
	it('Children: null, null', () => {
		deepStrictEqual(
			actual(h(HTML, null, null, null)),
			expected('default_props.json')
		);
	});
	it('Children: null, div, null', () => {
		deepStrictEqual(
			actual(h(HTML, null, h('div', {className: 'hello'}), null)),
			expected('children_single.json')
		);
	});
	it('Children: undefined, undefined', () => {
		deepStrictEqual(
			actual(h(HTML, null, undefined, undefined)),
			expected('default_props.json')
		);
	});
	it('Children: div, meta, p, link, article', () => {
		const div = h('div', {className: 'mydiv'});
		const meta = h('meta', {content: 'hello'});
		const p = h('p', null, ['Hello']);
		const link = h('link', {rel: 'hello'});
		const article = h('article', {className: 'myarticle'});
		deepStrictEqual(
			actual(h(HTML, null, [div, meta, p, link, article])),
			expected('children_mixed.json')
		);
	});
});
