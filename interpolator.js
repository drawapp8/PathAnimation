function Interpolator() {
	this.get = function(percent) {
		return 0;
	}

	return this;
}

function LinearInterpolator() {
	this.get = function(percent) {
		return percent;
	}

	return this;
}

function BounceInterpolator() {
	function bounce(percent) {
		return 8 * percent * percent;
	}

	this.get = function(percent) {
		percent *= 1.1226;
        if (percent < 0.3535) return bounce(percent);
        else if (percent < 0.7408) return bounce(percent - 0.54719) + 0.7;
        else if (percent < 0.9644) return bounce(percent - 0.8526) + 0.9;
        else return bounce(percent - 1.0435) + 0.95;
	}

	return this;
}

function AccelerateInterpolator() {
	this.get = function(percent) {
		return percent * percent;
	}

	return this;
}

function AccDecelerateInterpolator() {
	this.get = function(percent) {
		return ((Math.cos((percent + 1) * Math.PI) / 2.0) + 0.5);
	}

	return this;
}

function DecelerateInterpolator(factor) {
	this.factor = factor ? factor : 2;
	this.get = function(percent) {
		if(this.factor === 1) {
			return (1.0 - (1.0 - percent) * (1.0 - percent));
		}
		else {
			return (1.0 - Math.pow((1.0 - percent), 2 * this.factor));
		}
	}

	return this;
}

