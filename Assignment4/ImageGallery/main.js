const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = 
[
<<<<<<< HEAD
	'images/pic1.jpg', 
	'images/pic2.jpg', 
	'images/pic3.jpg', 
	'images/pic4.jpg', 
	'images/pic5.jpg'
=======
	'ImageGallery/images/pic1.jpg', 
	'ImageGallery/images/pic2.jpg', 
	'ImageGalery/images/pic3.jpg', 
	'ImageGallery/images/pic4.jpg', 
	'ImageGallery/images/pic5.jpg'
>>>>>>> 67dda7eb47d7ef00406ae22279c86f28e843cd48
];

/* Declaring the alternative text for each image file */
const altTexts = 
{
	'images/pic1.jpg': 'Human Eye', 
	'images/pic2.jpg': 'Snow', 
	'images/pic3.jpg': 'Flowers', 
	'images/pic4.jpg': 'Egypt', 
	'images/pic5.jpg': 'Butterfly'
};

/* Looping through images */
<<<<<<< HEAD
for (let i = 0; i < pictures.length; i++) 
{
	const newImage = document.createElement('img');
	newImage.setAttribute('src', pictures[i]);
	newImage.setAttribute('alt', altTexts[pictures[i]]);		
=======
for (let i = 1; i <= picture; i++) 
{
	const newImage = document.createElement('img');
	newImage.setAttribute('src', picture[i]);
	newImage.setAttribute('alt', altPicture[i]);		
>>>>>>> 67dda7eb47d7ef00406ae22279c86f28e843cd48
	thumbBar.appendChild(newImage); 
	
	newImage.addEventListener('click', () => 
	{
		displayedImage.setAttribute('src', newImage.getAttribute('src'));
		displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
	});
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () =>
{
	const btnClass = btn.getAttribute('class');
	
	if (btnClass === 'dark')
	{
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	}
	else
	{
		btn.setAttribute('class', 'dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
	}
});
