// Football
// The 16 teams who play in the Thai League 1 season are ["Bangkok United","BG Pathum United","Buriram United","Chiangrai United","Chonburi","Muangthong United","Nakhon Ratchasima","Police Tero","Port","PT Prachuap","Ratchaburi Mitr Phol","Rayong","Samut Prakan City","Sukhothai","Suphanburi","Trat"].

// Due to COVID-19 the teams cannot play each other, so they agree to simulate the season. Each team plays each of the other teams once. To see who wins each match, calculate the MD5 hash of the two team names, concatenated together.

// If md5(team1+team2) > md5(team2+team1) then team1 wins, otherwise team2 wins. for example

// md5("Bangkok UnitedTrat")="9982cf45c77d046b696bd5535e2945cf"
// md5("TratBangkok United")="3bdf541a86b04e3d994126f06aac5c82"
// So Bangkok United win this match.

// Which team comes last, with only 3 wins out of 15?

const football = (input) => {
  const scoreTable = {};
  for (team of input) {
    for (opponent of input) {
      if (team === opponent) continue;
    };
  };
};