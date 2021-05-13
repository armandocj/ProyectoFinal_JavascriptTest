function bubbleSort(items) {
    const elementos = items.length;
    for (var i = (elementos - 1); i > 0 ; i--) {
        for (var j = (elementos - i); j > 0 ; j--){
            if (items[j] < items[j - 1]) {
                [items[j], items[j-1]]=[items[j-1],items[j]]
            }
        }
    }
    return items;
}

module.exports = bubbleSort;