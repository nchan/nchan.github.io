/*
	Film Photography Gallery + Scroll Fade-in
	nchan.github.io
*/

(function($) {

	/* ----------------------------------------------------------------
	   Film Photography Gallery
	   ---------------------------------------------------------------- */

	var galleryImages = [
		{ src: 'images/pic01.jpg', alt: 'Film scan 1' },
		{ src: 'images/pic02.jpg', alt: 'Film scan 2' },
		{ src: 'images/pic03.jpg', alt: 'Film scan 3' },
		{ src: 'images/bg.jpg',   alt: 'Film scan 4' }
	];

	var currentIndex = 0;
	var $modal       = $('#gallery-modal');
	var $img         = $modal.find('.gallery-img');
	var $counter     = $modal.find('.gallery-counter');

	function openGallery(startIndex) {
		currentIndex = startIndex || 0;
		$modal.addClass('is-visible');
		$('body').css('overflow', 'hidden');
		showImage(currentIndex);
	}

	function closeGallery() {
		$modal.removeClass('is-visible');
		$('body').css('overflow', '');
		// Clear src after transition so image fades in fresh next open
		setTimeout(function() {
			if (!$modal.hasClass('is-visible')) {
				$img.removeClass('is-loaded').attr('src', '');
			}
		}, 450);
	}

	function showImage(index) {
		// Wrap around
		currentIndex = ((index % galleryImages.length) + galleryImages.length) % galleryImages.length;
		$img.removeClass('is-loaded');

		var data = galleryImages[currentIndex];
		$img.attr('alt', data.alt);

		// Brief pause before loading new src so fade-out is visible
		setTimeout(function() {
			$img.off('load.gallery').on('load.gallery', function() {
				$(this).addClass('is-loaded');
			});
			$img.attr('src', data.src);
			// Handle already-cached images
			if ($img[0].complete && $img[0].naturalWidth > 0) {
				$img.addClass('is-loaded');
			}
		}, 80);

		$counter.text((currentIndex + 1) + ' / ' + galleryImages.length);
	}

	// Open on click or Enter/Space keypress
	$('.film-photo-trigger')
		.on('click', function() {
			openGallery(0);
		})
		.on('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				openGallery(0);
			}
		});

	// Close
	$modal.find('.gallery-overlay, .gallery-close').on('click', closeGallery);

	// Navigation
	$modal.find('.gallery-prev').on('click', function() {
		showImage(currentIndex - 1);
	});
	$modal.find('.gallery-next').on('click', function() {
		showImage(currentIndex + 1);
	});

	// Keyboard navigation
	$(document).on('keydown.gallery', function(e) {
		if (!$modal.hasClass('is-visible')) return;
		switch (e.key) {
			case 'Escape':     closeGallery();              break;
			case 'ArrowLeft':  showImage(currentIndex - 1); break;
			case 'ArrowRight': showImage(currentIndex + 1); break;
		}
	});

	/* ----------------------------------------------------------------
	   Scroll Fade-in for Section Content
	   ---------------------------------------------------------------- */

	if ('IntersectionObserver' in window) {
		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					$(entry.target).addClass('is-content-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });

		$('.main .content').each(function() {
			observer.observe(this);
		});
	} else {
		// Fallback for older browsers: show content immediately
		$('.main .content').addClass('is-content-visible');
	}

})(jQuery);
