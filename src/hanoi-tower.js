module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const ONEHOUR = 3600;
    let turn_inSecond = turnsSpeed / ONEHOUR;
    let count_turn = Math.pow(2, disksNumber) -1;
    let time = count_turn / turn_inSecond;
    let object = {};

    object.turns = count_turn;
    object.seconds = time;
    return object;
}