function superbowlWin(record){
    let winRecord = record.find(game => game.result === "W");

    return winRecord ? winRecord.year : undefined;
    
}

module.exports = superbowlWin;