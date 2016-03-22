function maxArray() {

}
(function () {
    'use strict';
    window.app = {

        divide: function (a, b) {
            return a >= 1 && a <= 100 && b < a && b != 0 ? a / b : false;
        },
        getDescendingNumbers: function (numberFrom, numberTo) {
            if (typeof numberFrom === 'number' && typeof numberTo === 'number' && numberFrom > numberTo) {

                var descendingNumbers = numberFrom;
                for (var i = numberFrom - 1; i >= numberTo; i--) {
                    descendingNumbers = descendingNumbers + ' ' + i;
                }

                return descendingNumbers;
            } else {
                return false;
            }
        },
        areaOfTrapezoid: function (a, b, h) {
            if (a < 0 || b < 0 || h < 0 || typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number') {
                return false;
            }
            maxArray();
            return 0.5 * h * (a + b);
        },
        maxArray: function(t){
            var max;
            max=0;
            for(var i=0; i< t.length; i++) {
                if (typeof t[i] !== 'number') {
                    return false;
                }
                else {
                    if (t[i] > max) {
                        max = t[i];
                    }
                    if (i == t.length - 1) {
                        return max;
                    }
                }
            }
        },
        squareOdd: function (t) {
            for(var i=0; i< t.length; i++) {
                if (typeof t[i] !== 'number') {
                    return false;
                }
                else {
                    if (t[i]%2!=0) {
                        t[i] = t[i]*t[i];
                    }
                }
            }
            return t ;
    }
    }
})();








