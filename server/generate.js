var faker = require('faker');

var database = {
    lineup : [],
    playerList : [], 
    lineupList : []
}

for (var i = 0; i < 100; i++) {
  database.playerList.push({
    id: i,
    date: "2021-01-01", 
    name: "Lebron James",
    fn: "Lebron", 
    ln: "James", 
    pos: 'C', 
    inj: 'O',
    team: "LAL", 
    salary: 10000,
    ppg_proj: 56.6, 
    value_proj: 4.6
  });
}

for (var i = 0; i< 8; i++) {
    database.lineup.push({
        id: i,
        date: "2021-01-01", 
        name: "Lebron James",
        fn: "Lebron", 
        ln: "James", 
        pos: 'C', 
        inj: 'O',
        team: "LAL", 
        salary: 10000,
        ppg_proj: 56.6, 
        value_proj: 4.6
    });
}

for (var i = 0; i< 10; i++) {
    database.lineupList.push(database.lineup);
}

console.log(JSON.stringify(database));







