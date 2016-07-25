//for looking up items in an array
var lookupItem = function (array, name) {
    var lookup = {};
    for (var i = 0, len = array.length; i < len; i++) {
        lookup[array[i].name] = array[i];
    }
    return lookup[name];
}
