'use strict';

var nextButton = document.getElementById('next');

var projects = Array.from(document.getElementsByClassName('project-box')),
    projectsLen = projects.length;

var index = 0,
    nextIndex = 1;

nextButton.addEventListener('mouseup', function () {
	if (index == projectsLen - 1) {
		nextIndex = 0;
	} else if (index >= projectsLen) {
		index = 0;
	}
	var current = projects[index];
	var next = projects[nextIndex];
	console.log('I:' + index + ' | NI: ' + nextIndex);
	// current.classList.remove('fadeOutLeft');
	current.classList.add('fadeOutLeft');
	current.classList.remove('fadeInRight');

	current.addEventListener('webkitAnimationEnd', function (evt) {
		console.log(evt);
		console.log(current.classList);
		if (evt.animationName == 'fadeOutLeft' && current.classList.contains('fadeOutLeft')) {
			current.classList.remove('fadeOutLeft');
			current.classList.add('hidden');
			next.classList.add('fadeInRight');
			next.classList.remove('hidden');
			index += 1;
			nextIndex += 1;
		} else {}
	});
});

var naviconButton = document.getElementById('navicon');
var dropNav = document.getElementById('drop-nav');
var dropNavUl = document.getElementById('drop-nav-ul');
naviconButton.addEventListener('mousedown', function (evt) {
	if (dropNav.classList.contains('hidden') && dropNavUl.classList.contains('hidden')) {
		console.log('1');
		dropNav.classList.add('fadeIn');
		dropNav.classList.remove('hidden');

		dropNavUl.classList.add('flipInY');
		dropNavUl.classList.remove('hidden');
	} else {
		console.log('2');
		dropNav.classList.remove('fadeIn');
		dropNav.classList.add('fadeOut');

		dropNavUl.classList.remove('flipInY');
		dropNavUl.classList.add('flipOutX');
	};

	dropNavUl.addEventListener('webkitAnimationEnd', function (evt) {
		if (evt.animationName == 'flipOutX') {
			console.log('3');
			dropNav.classList.remove('fadeOut', 'fadeIn');
			dropNav.classList.add('hidden');

			dropNavUl.classList.remove('flipOutX');
			dropNavUl.classList.add('hidden');
		}
	});
	// dropNav.classList.add('fadeOut');
	// dropNavUl.classList.remove('flipInY');
	// dropNavUl.classList.add('flipOutX');
	// }
});