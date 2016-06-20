function addToQueue(names, queueLength) {
    var positions = []

    for (var i = 0; i < names.length; i++) {
        positions[i] = function() {
            return queueLength + i + 1
        }
    }

    return positions
}

var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10)

console.log(queueLength);
console.log(queuePositions[0]()); // 13?! Should be 11
console.log(queuePositions[1]()); // 13 As well!