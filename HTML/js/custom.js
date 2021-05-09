/****************************************************************************
 * Micko v1.0.0
 * Digital & LMS Marketplace with Social Networking Html Template by Gambolthemes
 * Copyright 2021 | Gambolthemes | https://gambolthemes.net
 * @package Gambolthemes
 ****************************************************************************/
 
// === Responsive Navbar=== //
$(document).ready(function() {
  var fixHeight = function() {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };
  fixHeight();
  $(window).resize(function() {
    fixHeight();
  });
  $('.navbar .navbar-toggler').on('click', function() {
    fixHeight();
  });
  $('.navbar-toggler, .overlay').on('click', function() {
    $('.mobileMenu, .overlay').toggleClass('open');
  });
});


// === Custom Toggle Menu For Top Nav === //

$(document).on('click', 'a.nav-icon-list', function(e) {
	e.preventDefault();
	$('.lecture-sidebar').toggle();
});

// === Bootstrap Tooltip === //
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

// === Show and Leave a Comment === //
$('.leave_a_comment, .all_comments, .leave_a_reply').on('click', function () {
	$(this).parents(".post-meta, .comment-meta").siblings(".comment_wrapper").slideToggle("slow");
});

// === share post popup	=== //
$('.react-button__share').on('click', function () {
	$('.popup-wrapper2').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper2').removeClass('active');
});


// === All Popups	=== //

// Add post popup
$('.add_post').on('click', function () {
	$('.popup-wrapper1').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper1').removeClass('active');
});


// Add Course popup
$('.add_course_popup').on('click', function () {
	$('.popup-wrapper3').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper3').removeClass('active');
});


// Add Course popup
$('.add-section-title').on('click', function () {
	$('.popup-wrapper4').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper4').removeClass('active');
});


// Add New Lecture Popup 
$('.add_lecture').on('click', function () {
	$('.popup-wrapper5').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper5').removeClass('active');
});


// Add New Quiz Popup
$('.add_quiz').on('click', function () {
	$('.popup-wrapper6').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper6').removeClass('active');
});


// Add New Assignment Popup
$('.add_assignment').on('click', function () {
	$('.popup-wrapper7').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper7').removeClass('active');
});

// Remove Connection Popup
$('.remove_connection').on('click', function () {
	$('.popup-wrapper9').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper9').removeClass('active');
});

// Event Notification Setting Popup
$('.notstactn').on('click', function () {
	$('.popup-wrapper10').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper10').removeClass('active');
});

// Event Add to Page Popup
$('.addpageactn').on('click', function () {
	$('.popup-wrapper11').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper11').removeClass('active');
});

// Export Event Popup
$('.exportbtn').on('click', function () {
	$('.popup-wrapper12').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper12').removeClass('active');
});

// Report Popup
$('.reportbtn').on('click', function () {
	$('.popup-wrapper13').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper13').removeClass('active');
});

// Report Popup
$('.deletevbtn').on('click', function () {
	$('.popup-wrapper14').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper14').removeClass('active');
});

// Report Popup
$('.cnclbtn').on('click', function () {
	$('.popup-wrapper15').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper15').removeClass('active');
});

// Withdraw Request Popup
$('.wthdrwbtn').on('click', function () {
	$('.popup-wrapper16').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper16').removeClass('active');
});

// Go with friends Popup
$('.gowthfdsbtn').on('click', function () {
	$('.popup-wrapper17').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper17').removeClass('active');
});

// Apply Job Popup
$('.apply_job_btn').on('click', function () {
	$('.popup-wrapper18').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper18').removeClass('active');
});

// Apply Job Popup
$('.add_item_faq').on('click', function () {
	$('.popup-wrapper19').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper19').removeClass('active');
});

// Apply Job Popup
$('.view-discount_history').on('click', function () {
	$('.popup-wrapper20').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper20').removeClass('active');
});

// Delete Popup
$('.delete-item-btn').on('click', function () {
	$('.popup-wrapper21').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper21').removeClass('active');
});

// Delete Course Popup
$('.course-delete-link').on('click', function () {
	$('.popup-wrapper22').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper22').removeClass('active');
});

// Add Rating Popup
$('.add-rating-popup').on('click', function () {
	$('.popup-wrapper23').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper23').removeClass('active');
});

// US Citizen Popup
$('.certi_us_citi_btn').on('click', function () {
	$('.popup-wrapper24').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper24').removeClass('active');
});

// Non US Citizen Individual Popup
$('.certi_non_us_citi_indi_btn').on('click', function () {
	$('.popup-wrapper25').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper25').removeClass('active');
});

// Non US Citizen Corporation Popup
$('.certi_non_us_citi_corpo_btn').on('click', function () {
	$('.popup-wrapper26').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper26').removeClass('active');
});

// Send Money Popup
$('.send-money-btn').on('click', function () {
	$('.popup-wrapper27').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper27').removeClass('active');
});

// Send Money Popup
$('.play-btn').on('click', function () {
	$('.popup-wrapper28').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper28').removeClass('active');
});

// Create Group Chat Popup
$('.create_group_chat').on('click', function () {
	$('.popup-wrapper29').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper29').removeClass('active');
});

// Add GST Popup
$('.add-gst-btn').on('click', function () {
	$('.popup-wrapper30').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper30').removeClass('active');
});

// Add Popup
$('.page-link-btn').on('click', function () {
	$('.popup-wrapper31').addClass('active');
	return false;
});
	$('.popup-closed, .cancel').on('click', function () {
	$('.popup-wrapper31').removeClass('active');
});


// === Radio buttons Tabs=== //

// Share post popup radio buttons
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".share-box").not(targetBox).hide();
        $(targetBox).show();
    });
});

// Video Lecture popup radio buttons
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".video-box").not(targetBox).hide();
        $(targetBox).show();
    });
});

// Quiz popup radio buttons
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".quiz-box").not(targetBox).hide();
        $(targetBox).show();
    });
});

// Intro Box popup radio buttons
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".intro-box").not(targetBox).hide();
        $(targetBox).show();
    });
});

// Report Box popup radio buttons
$(document).ready(function(){
    $('.actve12').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".report-box").not(targetBox).hide();
        $(targetBox).show();
    });
});


// === Add tags === //
$(".tags-container").each(function() {

	var keywordInput = $(this).find(".tags-input");
	var keywordsList = $(this).find(".tags-list");

	// adding tags
	function addKeyword() {
		var $newKeyword = $("<span class='tag'><span class='tag-remove'></span><span class='tag-text'>"+ keywordInput.val() +"</span></span>");
		keywordsList.append($newKeyword).trigger('resizeContainer');
		keywordInput.val("");
	}

	// add via enter key
	keywordInput.on('keyup', function(e){
		if((e.keyCode == 13) && (keywordInput.val()!=="")){
			addKeyword();
		}
	});

	// add via button
	$('.tags-input-button').on('click', function(){ 
		if((keywordInput.val()!=="")){
			addKeyword();
		}
	});

	// removing tags
	$(document).on("click",".tag-remove", function(){
		$(this).parent().addClass('tag-removed');

		function removeFromMarkup(){
		  $(".tag-removed").remove();
		}
		setTimeout(removeFromMarkup, 500);
		keywordsList.css({'height':'auto'}).height();
	});


	// animating container height
	keywordsList.on('resizeContainer', function(){
		var heightnow = $(this).height();
		var heightfull = $(this).css({'max-height':'auto', 'height':'auto'}).height();

		$(this).css({ 'height' : heightnow }).animate({ 'height': heightfull }, 200);
	});

	$(window).on('resize', function() {
		keywordsList.css({'height':'auto'}).height();
	});

	// Auto Height for tags that are pre-added
	$(window).on('load', function() {
		var keywordCount = $('.tags-list').children("span").length;

		// Enables scrollbar if more than 3 items
		if (keywordCount > 0) {
			keywordsList.css({'height':'auto'}).height();
	
		} 
	});

});


// === Custom Upload Button === //

var uploadButton = {
	$button    : $('.uploadBtn-input'),
	$nameField : $('.uploadBtn-file-name')
};

uploadButton.$button.on('change',function() {
	_populateFileField($(this));
});

function _populateFileField($button) {
	var selectedFile = [];
	for (var i = 0; i < $button.get(0).files.length; ++i) {
		selectedFile.push($button.get(0).files[i].name +'<br>');
	}
	uploadButton.$nameField.html(selectedFile);
}

// === Custom Checkbox === //
function Checkbox(elem) {
  this.elem = elem;
  this.checked = elem.dataset.checked;
  
  // Extend your component:
  // this.name = ...
  // this.value = ...
  // this.onchange = ...

  elem.addEventListener('click', e => {
    this.checked = !this.checked;
    this.render();
  });
}

Checkbox.prototype.render = function() {
  this.elem.setAttribute('data-checked', this.checked);
}

function initCheckboxes(elems) {
  for (let i = 0; i < elems.length; i++) {
    new Checkbox(elems[i]);
  }
}

initCheckboxes(document.querySelectorAll('.checkbox'));


// === Chat popup message box	=== //
$('.msgngup').on('click', function() {
	$('.chat-box').addClass("show");
	return false;
});	
$('.close-msg').on('click', function() {
	$('.chat-box').removeClass("show");
	return false;
});

// === Read more clicked on === //
$('.moreless-btn').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-btn').text() == "See more") {
    $(this).text("See less")
  } else {
    $(this).text("See more")
  }
});

// === Experience Check box Hide/Show === //
$(".endyrs145").show();
$(".exp_check").click(function() {
    if($(this).is(":checked")) {
        $(".endyrs145").hide();
    } else {
        $(".endyrs145").show();
    }
});


// === Expand/Collapse all === //

var headers = $('#accordion .accordion-header');
var contentAreas = $('#accordion .ui-accordion-content ').hide()
.first().show().end();
var expandLink = $('.accordion-expand-all');

// add the accordion functionality
headers.click(function() {
    // close all panels
    contentAreas.slideUp();
    // open the appropriate panel
    $(this).next().slideDown();
    // reset Expand all button
    expandLink.text('Expand all')
        .data('isAllOpen', false);
    // stop page scroll
    return false;
});

// hook up the expand/collapse all
expandLink.click(function(){
    var isAllOpen = !$(this).data('isAllOpen');
    console.log({isAllOpen: isAllOpen, contentAreas: contentAreas})
    contentAreas[isAllOpen? 'slideDown': 'slideUp']();
    
    expandLink.text(isAllOpen? 'Collapse All': 'Expand all')
                .data('isAllOpen', isAllOpen);    
});

// === Rating Javascript === //
$(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('.rstars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('.rstars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('.rstars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
    
  });
  
});

function responseMessage(msg) {
  $('.success-box').fadeIn(200);  
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}

// === Period Toggle === //
jQuery(document).ready(function(){
    jQuery('.custom-period-btn').on('click', function(event) {        
        jQuery('.custom-period-content').toggle('show');
    });
});

// === Exclusivity of Your Items === //
$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".exclusivity-box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".exclusivity-box").hide();
            }
        });
    }).change();
});

// === Affiliates Balance Withdrawal === //
$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".withdrawal-box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".withdrawal-box").hide();
            }
        });
    }).change();
});

// === Add Money Toggle === //
jQuery(document).ready(function(){
    jQuery('.add-money-btn').on('click', function(event) {        
        jQuery('.add_money-content').toggle('show');
    });
});

// === learning OWL === //
$('.learning_slider').owlCarousel({
	loop:false,
    margin:30,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// === Newest learning OWL === //
$('.newest_slider').owlCarousel({
	loop:false,
    margin:30,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// === Newest learning OWL === //
$('.bestsellers_slider').owlCarousel({
	loop:false,
    margin:30,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// === People You May Know OWL === //
$('.ppl_slider').owlCarousel({
	loop:false,
    margin:15,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// === Suggesyion Pages OWL === //
$('.suggest_slider').owlCarousel({
	loop:false,
    margin:15,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// === Suggesyion Pages OWL === //
$('.hash_slider').owlCarousel({
	loop:false,
    margin:15,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// === Suggesyion Pages OWL === //
$('.group_slider').owlCarousel({
	loop:false,
    margin:15,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// === Event Category OWL === //
$('.evtcate_slider').owlCarousel({
	loop:false,
    margin:10,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:2
		},
		600:{
			items:2
		},
		800:{
			items:3
		},
		1000:{
			items:4
		},
		1200:{
			items:5
		},
		1400:{
			items:6
		}
	}
})

// === Related Products OWL === //
$('.related_products_slider').owlCarousel({
	loop:false,
    margin:30,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		800:{
			items:2
		},
		1000:{
			items:3
		},
		1200:{
			items:3
		},
		1400:{
			items:4
		}
	}
})

// === Related Courses OWL === //
$('.related_courses_slider').owlCarousel({
	loop:false,
    margin:30,
	nav:true,
	dots:false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		800:{
			items:2
		},
		1000:{
			items:3
		},
		1200:{
			items:3
		},
		1400:{
			items:4
		}
	}
})


