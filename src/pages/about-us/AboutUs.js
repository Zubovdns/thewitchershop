import React from 'react';
import './css/AboutUs.css';
import ImageCall from './img/ImageCall.png';
import ImageTG from './img/ImageTG.png';
import ImageVK from './img/ImageVK.png';

function AboutUs() {
	return (
		<div className='AboutUs'>
			<div className='AboutUsHeader'>О нас</div>
			<div className='AboutUsInfo'>
				<p className='InfoHeader'>
					Добро пожаловать на страницу нашего веб-сайта!
				</p>{' '}
				<p>
					Мы - студенческий коллектив, объединенный общим интересом к учебному
					процессу и стремлением достичь лучших результатов.
				</p>
				<p>
					Мы гордимся тем, что создаем уникальные проекты и решения в рамках
					наших учебных курсов. Наши наставники поддерживают нас, вдохновляя на
					креативные подходы и смелые идеи.
				</p>
				<p>
					Исследование и обучение - наши основные ценности. Мы стремимся к тому,
					чтобы каждый из нас ощущал важность своей роли в учебном процессе.
				</p>
				<div className='AboutUsInfoHeader'>Связаться с нами</div>
				<div className='FirstContact'>
					<div className='ImageCall'>
						<img className='ImageCallPng' src={ImageCall} />
						<p>+375 (29) 572-80-44</p>
					</div>
					<div className='ImageVK'>
						<img className='ImageCallPng' src={ImageVK} />
						<p>galaxyeater</p>
					</div>
					<div className='ImageTG'>
						<img className='ImageCallPng' src={ImageTG} />
						<p>savagemercury</p>
					</div>
				</div>
				<div className='SecondContact'>
					<div className='ImageCall'>
						<img className='ImageCallPng' src={ImageCall} />
						<p>+375 (44) 582-53-21</p>
					</div>
					<div className='ImageVK2'>
						<img className='ImageCallPng' src={ImageVK} />
						<p>zubovdns</p>
					</div>
					<div className='ImageTG'>
						<img className='ImageCallPng' src={ImageTG} />
						<p>zubovdns</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
