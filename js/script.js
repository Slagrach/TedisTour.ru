$('#up, #up2').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});

$('.slider-slick').slick({
	slidesToShow: 3,
	nextArrow: $('.slider-control__next'),
	prevArrow: $('.slider-control__prev'),
})


$(".custom-select").each(function () {
	const classes = $(this).attr("class"),
		id = $(this).attr("id"),
		name = $(this).attr("name");
	let template = '<div class="' + classes + '">';
	template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
	template += '<div class="custom-options">';
	$(this).find("option").each(function () {
		template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
	});
	template += '</div></div>';

	$(this).wrap('<div class="custom-select-wrapper"></div>');
	$(this).hide();
	$(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
	$(this).parents(".custom-options").addClass("option-hover");
}, function () {
	$(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
	$('html').one('click', function () {
		$(".custom-select").removeClass("opened");
	});
	$(this).parents(".custom-select").toggleClass("opened");
	event.stopPropagation();
});
$(".custom-option").on("click", function () {
	$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
	$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
	$(this).addClass("selection");
	$(this).parents(".custom-select").removeClass("opened");
	$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


const data = document.querySelector('.datepicker-here');
const item = document.querySelector('.item-date');
let click = data.addEventListener('click', function () {
})
if (click) {
	item.classList.toggle('focus');
}
$(".data").focus(function() {
	// if ($(this).val().trim().length) {
	// 	$(this).addClass("focus");
	// } else {
	// 	$(this).removeClass("focus");
	// }
	$('.item-date').addClass('focus');
})

$(".data").blur(function() {
	$('.item-date').removeClass('focus');
})
// const uiField = document.getElementsByClassName('.data')[0];
// uiField.addEventListener('focus', function () {
//
// 	if (uiField.value.length >= 1) {
// 		uiField.classList.add('focus');
// 	}else{
// 		uiField.classList.remove('focus');
// 	}
// })
