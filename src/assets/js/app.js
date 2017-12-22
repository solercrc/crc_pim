import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';



$(document).ready(function() {
    $('.circle-inner').each(function() {
	    $(this).css({
	        'position' : 'absolute',
	        'left' : '50%',
	        'top' : '50%',
	        'margin-left' : -$(this).outerWidth()/2,
	        'margin-top' : -$(this).outerHeight()/2
	    });
	});
});



$(document).foundation();
