define(['jquery','encoder'], function($, Encoder) {


	var encoder = Encoder.build({
		'spaced-title': {
			ini: ['-', ' '],
			res: ['_', '-']
		}
	});


	$('#e-input').change(function(e) {
		var $target = $(e.target),
			value = encoder.encode('spaced-title', $target.val());

		$('#d-input').val(value);
	});

	$('#d-input').change(function(e) {
		var $target = $(e.target),
			value = encoder.decode('spaced-title', $target.val());

		$('#e-input').val(value);
	});
});