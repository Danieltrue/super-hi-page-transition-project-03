const bodyTag = document.querySelector('body');
const wiper = document.createElement('div');
wiper.classList.add('wiper');

const logo = document.createElement('img');
logo.setAttribute('src','logo.svg');

//add text
const wiperHolder = document.createElement('div');
const wiperText = document.createElement('h2');
wiperText.textContent = 'Wanderers';
wiperHolder.appendChild(wiperText)

wiper.appendChild(logo);
wiper.appendChild(wiperHolder)


bodyTag.appendChild(wiper);

//
barba.init({
	transitions: [
		{
			name: 'next',
			custom({current, next, trigger
			}){
				return trigger.classList && trigger.classList.contains('next')
			},
			leave ({current, next, trigger}) {
				// Code Enter Here
				return new Promise(resolve => {
					//Run My Gsap Timeline here
					const timeline = gsap.timeline({
						onComplete() {
							current.container.remove()
							resolve()
						}
					});
					//
					const navigation = current.container.querySelectorAll('header, a.next, a.previous');
					const photos = current.container.querySelectorAll('div.photos');
					//use the timeline i created

					timeline
						.set(wiper, {x: '-100%'})
						.set(wiperText, {y: '-100%'})
						.set(logo, {opacity: 0})
						.to(navigation, {opacity: 0},0)
						.to(photos,{opacity: 0.25, x: 600},0)
						.to(wiper, {x: 0},0)

				})
			},
			beforeEnter({current, next, trigger}) {
					//Change Text
					wiperText.textContent = next.container.getAttribute('data-title')
				return new Promise(resolve => {


					const timeline = gsap.timeline({
						defaults: {
							duration: 1
						},
						onComplete() {
							resolve()
						}
					})

					timeline
						.to(logo, {opacity: 1})
						.to(wiperText,{y: 0})
						.to(wiperText, {y: '100%', delay: 1})
						.to(logo, {opacity:0,} )


				})
			},
			enter({current, next, trigger}) {
				// Code Enter Here
				return new Promise(resolve => {
					//Run My Gsap Timeline here
					const timeline = gsap.timeline({
						onComplete() {
							resolve()
						}
					});

					//
					const navigation = next.container.querySelectorAll('header, a.next, a.previous');
					const photos = next.container.querySelectorAll('div.photos');
					//use the timeline i created

					timeline
						.set(navigation, {opacity: 0})
						.set(photos, {opacity: 0, x: -500})
						.to(navigation, {opacity: 1})
						.to(photos, {opacity: 1, x: 0})
						.to(wiper, {x: '100%'},0)


				})
			}
		},
		{
			name: 'previous',
			leave ({current, next, trigger}) {
				// Code Enter Here
				return new Promise(resolve => {
					//Run My Gsap Timeline here
					const timeline = gsap.timeline({
						onComplete() {
							current.container.remove()
							resolve()
						}
					});
					//
					const navigation = current.container.querySelectorAll('header, a.next, a.previous');
					const photos = current.container.querySelectorAll('div.photos');
					//use the timeline i created

					timeline
						.set(wiper, {x: '100%'})
						.set(wiperText, {y: '-100%'})
						.set(logo, {opacity: 0})
						.to(navigation, {opacity: 0},0)
						.to(photos,{opacity: 0.25, x: -600},0)
						.to(wiper, {x: 0},0)

				})
			},
			beforeEnter({current, next, trigger}) {
					//Change Text
					wiperText.textContent = next.container.getAttribute('data-title')
				return new Promise(resolve => {


					const timeline = gsap.timeline({
						defaults: {
							duration: 1
						},
						onComplete() {
							resolve()
						}
					})

					timeline
						.to(logo, {opacity: 1})
						.to(wiperText,{y: 0})
						.to(wiperText, {y: '100%', delay: 1})
						.to(logo, {opacity:0,} )


				})
			},
			enter({current, next, trigger}) {
				// Code Enter Here
				return new Promise(resolve => {
					//Run My Gsap Timeline here
					const timeline = gsap.timeline({
						onComplete() {
							resolve()
						}
					});

					//
					const navigation = next.container.querySelectorAll('header, a.next, a.previous');
					const photos = next.container.querySelectorAll('div.photos');
					//use the timeline i created

					timeline
						.set(navigation, {opacity: 0})
						.set(photos, {opacity: 0, x: 500})
						.to(navigation, {opacity: 1})
						.to(photos, {opacity: 1, x: 0})
						.to(wiper, {x: '-100%'},0)


				})
			}

		}
	],
	views: [],
	debug: true
})