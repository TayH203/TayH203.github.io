const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picture = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altPicture = 
{
	'pic1.jpg': 'Human Eye',
	'pic2.jpg': 'Amazing Snow Art',
	'pic3.jpg': 'Flowers',
	'pic4.jpg': 'Ancient Egypt',
	'pic5.jpg': 'Moth leaf'
};

/* Looping through images */
for (const image of picture) 
{
	const newImage = document.createElement('img');
	newImage.setAttribute('src', picture);
	newImage.setAttribute('alt', altText[picture]);		
	thumbBar.appendChild(newImage); 
	
	newImage.addEventListener('click', () => 
	{
		displayedImage.setAttribute('src', newImage.getAttribute('src'));
		displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
	}
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
