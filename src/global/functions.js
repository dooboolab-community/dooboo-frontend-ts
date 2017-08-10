module.exports = {
    getWorldTime : function(tzOffset){
        var now = new Date();
        var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
        now.setTime(tz);

        var leadingZeros = function (n, digits) {
            var zero = '';
            n = n.toString();

            if (n.length < digits) {
                for (var i = 0; i < digits - n.length; i++)
                    zero += '0';
            }
            return zero + n;
        };

        var s =
            leadingZeros(now.getFullYear(), 4) + '-' +
            leadingZeros(now.getMonth() + 1, 2) + '-' +
            leadingZeros(now.getDate(), 2) + ' ' +

            leadingZeros(now.getHours(), 2) + ':' +
            leadingZeros(now.getMinutes(), 2) ;

        return s;
    },
    getStorage : function(key){
        return localStorage.getItem(key);
    },
    setStorage : function(key, value){
        return localStorage.setItem(key,value);
    },
    destroyStorage : function(key){
        return localStorage.removeItem(key);
    },
    getSessionStorage : function(key){
        return sessionStorage.getItem(key);
    },
    setSessionStorage : function(key, value){
        return sessionStorage.setItem(key, value);
    },
    destroySessionStorage : function(key){
        return sessionStorage.removeItem(key);
    },
    checkImageExists : function(url, callback){
        var img = new Image();
        img.onload = function() {callback(true);};
        img.onerror = function() {callback(false);};
        img.src = url;
    }
};