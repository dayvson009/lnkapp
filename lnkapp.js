(function (w,d){

	/**
	 * @function isMobile
	 * detecta se o useragent e um dispositivo mobile
	 */
	function isMobile()
	{
		var userAgent = navigator.userAgent.toLowerCase();
		if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 )
			return true;

		return false;
	}

	if( isMobile() ){

		var config = {
			eles : d.querySelectorAll('a[data-applnk]'),
			attr: 'data-applnk'
		}

		var attr, ele;

		for (var i = 0, t = config.eles.length; i < t; i++){
			
			ele = config.eles[i];

			attr = ele.getAttribute( config.attr );

			if(attr != null)
				ele.href = attr;
			
		};

	}

}(window,document));

