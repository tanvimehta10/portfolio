// For each element in the document that possesses the [_widths]
// attribute, set 'widths' to be an array of values extracted
// from said attribute. For each of the 5 values, set the
// corresponding class.

Array.from(document.querySelectorAll('[_span]')).map((elem) => {
	let _span = elem.getAttribute('_span').split(/\D/g).filter(Boolean);
	elem.className += ` xs-${_span[0]}`;
	elem.className += ` sm-${_span[1]}`;
	elem.className += ` md-${_span[2]}`;
	elem.className += ` lg-${_span[3]}`;
	elem.className += ` xl-${_span[4]}`;
});
