let imagesCollection = Array.from(document.getElementsByClassName('slider__item'));
let dots = Array.from(document.getElementsByClassName('slider__dot'))
const arrowRight = document.querySelector('div .slider__arrow_next');
const arrowLeft = document.querySelector('div .slider__arrow_prev');

window.addEventListener('load', function(){
	let activeIndex = imagesCollection.findIndex((item) => item.className === 'slider__item slider__item_active');
	dots[activeIndex].className = 'slider__dot slider__dot_active'
})

let activeIndex = imagesCollection.findIndex((item) => item.className === 'slider__item slider__item_active');

function showImage(position){
	imagesCollection[position].className = 'slider__item slider__item_active'
	dots[position].className = 'slider__dot slider__dot_active'
} 

function hideImage(position){
	imagesCollection[position].className = 'slider__item'
	dots[position].className = 'slider__dot'	
}

arrowRight.addEventListener('click', function(){
	hideImage(activeIndex);
	activeIndex++;
	if (activeIndex === imagesCollection.length) {
		activeIndex = 0;
	}
	showImage(activeIndex);
	})


arrowLeft.addEventListener('click', function(){
	hideImage(activeIndex);
	activeIndex--;
	if (activeIndex === -1) {
		activeIndex = imagesCollection.length - 1;
	}
	showImage(activeIndex);
	})

dots.forEach((item, index) => item.addEventListener('click', function(){
	hideImage(activeIndex);
	showImage(index);
	activeIndex = index;
}))