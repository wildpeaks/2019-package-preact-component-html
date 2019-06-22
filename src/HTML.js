'use strict';
const {Component, h} = require('preact');
const headTags = ['style', 'link', 'meta'];


function isValidString(text){
	return (typeof text === 'string') && (text.trim() !== '');
}

function getAsyncScript(url){
	return h('script', {src: url, async: true});
}

function getAsyncStylesheet(url){
	return h('link', {rel: 'stylesheet', href: url});
	// return h(
	// 	'script',
	// 	{async: true},
	// 	`
	// 		var xhr = new XMLHttpRequest();
	// 		xhr.open('GET', ${JSON.stringify(url))}, true);
	// 		xhr.onreadystatechange = function(){
	// 			if ((xhr.readyState == 4) && (xhr.status == 200)){
	// 				var style = document.h('style');
	// 				style.innerHTML = xhr.responseText;
	// 				document.head.appendChild(style);
	// 			}
	// 		};
	// 		xhr.send();
	// 	`
	// );
}


class HTML extends Component {
	render(){
		const {props} = this;
		const htmlProps = {};
		if (typeof props.lang === 'string'){
			const lang = props.lang.trim();
			if (lang !== ''){
				htmlProps.lang = lang;
			}
		}

		const headChildren = [
			h('meta', {charset: 'utf-8'}),
			h('meta', {'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'})
		];
		if (typeof props.viewport === 'string'){
			const viewport = props.viewport.trim();
			if (viewport !== ''){
				headChildren.push(
					h('meta', {name: 'viewport', content: viewport})
				);
			}
		}
		if ((typeof props.title === 'string') && (props.title.trim() !== '')){
			headChildren.push(
				h('title', null, props.title)
			);
		}
		if (isValidString(props.css)){
			headChildren.push(
				h('style', null, props.css)
			);
		}
		if (isValidString(props.js)){
			headChildren.push(
				h('script', null, props.js)
			);
		}
		if (isValidString(props.favicon)){
			headChildren.push(
				h('link', {rel: 'shortcut icon', href: props.favicon})
			);
		}
		if (isValidString(props.canonical)){
			headChildren.push(
				h('link', {rel: 'canonical', href: props.canonical})
			);
		}

		const {children} = props;
		const bodyChildren = [];
		if (Array.isArray(children)){
			const l = children.length;
			for (let i = 0; i < l; i++){
				const child = children[i];
				if ((typeof child === 'object') && (child !== null) && (headTags.indexOf(child.nodeName) > -1)){
					headChildren.push(child);
				} else {
					bodyChildren.push(child);
				}
			}
		}

		const scripts = Array.isArray(props.scripts) ? props.scripts : [props.scripts];
		const scriptsCount = scripts.length;
		for (let i = 0; i < scriptsCount; i++){
			const url = scripts[i];
			if (isValidString(url)){
				bodyChildren.push(getAsyncScript(url));
			}
		}

		const stylesheets = Array.isArray(props.stylesheets) ? props.stylesheets : [props.stylesheets];
		const stylesheetsCount = stylesheets.length;
		for (let i = 0; i < stylesheetsCount; i++){
			const url = stylesheets[i];
			if (isValidString(url)){
				bodyChildren.push(getAsyncStylesheet(url));
			}
		}

		const head = h('head', null, headChildren);
		const body = h('body', null, bodyChildren);
		return h('html', htmlProps, head, body);
	}
}

HTML.defaultProps = {
	js: '',
	css: '',
	scripts: [],
	stylesheets: [],
	title: '',
	lang: 'en',
	favicon: '',
	canonical: '',
	viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
};


module.exports = HTML;
