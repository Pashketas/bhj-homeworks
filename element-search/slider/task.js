let imagesCollection = Array.from(document.getElementsByClassName('slider__item'));
let dots = Array.from(document.getElementsByClassName('slider__dot'))
const arrowRight = document.querySelector('div .slider__arrow_next');
const arrowLeft = document.querySelector('div .slider__arrow_prev');

window.addEventListener('load', function(){
	let activeIndex = imagesCollection.findIndex((item) => item.className === 'slider__item slider__item_active');
	dots[activeIndex].className = 'slider__dot slider__dot_active'
})

arrowRight.addEventListener('click', function(){
	let activeIndex = imagesCollection.findIndex((item) => item.className === 'slider__item slider__item_active');
	imagesCollection[activeIndex].className = 'slider__item';
	dots[activeIndex].className = 'slider__dot';
	activeIndex++;
	if (activeIndex === imagesCollection.length) {
		activeIndex = 0;
	}
	imagesCollection[activeIndex].className = 'slider__item slider__item_active';
	dots[activeIndex].className = 'slider__dot slider__dot_active';
	})


arrowLeft.addEventListener('click', function(){
	let activeIndex = imagesCollection.findIndex((item) => item.className === 'slider__item slider__item_active');
	imagesCollection[activeIndex].className = 'slider__item';
	dots[activeIndex].className = 'slider__dot';
	activeIndex--;
	if (activeIndex === -1) {
		activeIndex = imagesCollection.length - 1;
	}
	imagesCollection[activeIndex].className = 'slider__item slider__item_active';
	dots[activeIndex].className = 'slider__dot slider__dot_active';
	})

dots.forEach((item, index) => item.addEventListener('click', function(){
	let activeIndex = imagesCollection.findIndex((item) => item.className === 'slider__item slider__item_active');
	imagesCollection[activeIndex].className = 'slider__item';
	dots[activeIndex].className = 'slider__dot';
	imagesCollection[index].className = 'slider__item slider__item_active';
	dots[index].className = 'slider__dot slider__dot_active';
}))