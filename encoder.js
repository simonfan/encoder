define(['buildable','underscore'], function(Buildable, undef) {

	var Encoder = Object.create(Buildable);

	Encoder.extend({
		dictionaries: {},

		init: function(dictionaries) {
			this.define(dictionaries);
		},

		define: function(name, dictionary) {

			if (typeof name === 'object') {
				var _this = this;
				_.each(name, function(dictionary, name) {
					_this.define(name, dictionary);
				});

			} else {
				this.dictionaries[ name ] = dictionary;
			}
		},

		encode: function(dictionary, str) {
			dictionary = this.dictionaries[ dictionary ];

			console.log(dictionary);

			if (dictionary) {
				_.each(dictionary.ini, function(ini, index) {
					str = str.replace(ini, dictionary.res[ index ]);
				});
			}

			return str;
		},

		decode: function(dictionary, str) {
			dictionary = this.dictionaries[ dictionary ];

			if (dictionary) {
				_.each(dictionary.ini, function(ini, index) {
					str = str.replace(dictionary.res[ index ], ini);
				});
			}

			return str;
		}
	});


	return Encoder;
});