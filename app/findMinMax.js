exports.findMinMax = function(arr) {
    var maxValue = arr[0];
    var minValue = arr[0];

    var result = new Array();

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }

        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    if (maxValue === minValue) {
        result.push(minValue);
    }
    else {
        result.push(minValue);
        result.push(maxValue);
    }
    return result;
}
