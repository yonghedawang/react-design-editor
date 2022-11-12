import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';//去掉惹更新组件，目的在学习，暂时去掉代码更清晰
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import koKR from 'antd/lib/locale-provider/ko_KR';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './App';
import { register } from './serviceWorker';
import i18next from 'i18next';
import { i18nClient } from './i18n';

const antResources = {
	ko: koKR,
	'ko-KR': koKR,
	en: enUS,
	'en-US': enUS,
	
};

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const render = Component => {
	const rootElement = document.getElementById('root');
	ReactDom.render(<Component />, 
		rootElement,
	);
};

i18nClient();

render(App);

register();

if (module.hot) {
	module.hot.accept('./App', () => {
		render(App);
	});
}
