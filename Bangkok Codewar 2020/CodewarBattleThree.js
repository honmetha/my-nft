// Election
// In a (completely fictional) election there are two parties, the red party and blue party. The parties can win states, each of which have a number of electoral votes, shown in this JSON-formatted dictionary, for example the "AL" state is worth 9 votes.

// {"AL":9,"MT":3,"AK":3,"NE":5,"AZ":11,
// "NV":6,"AR":6,"NH":4,"CA":55,"NJ":14,
// "CO":9,"NM":5,"CT":7,"NY":29,"DE":3,
// "NC":15,"FL":29,"ND":3,"GA":16,"OH":18,
// "HI":4,"OK":7,"ID":4,"OR":7,"IL":20,
// "PA":20,"IN":11,"RI":4,"IA":6,"SC":9,
// "KS":6,"SD":3,"KY":8,"TN":11,"LA":8,
// "TX":38,"ME":4,"UT":6,"MD":10,"VT":3,
// "MA":11,"VA":13,"MI":16,"WA":12,"MN":10,
// "WV":5,"MS":6,"WI":10,"MO":10,"WY":3,"DC":3}
// If the red party wins these states [ "AK", "AL", "AR", "FL", "IA", "ID", "IN", "KS", "KY", "LA", "MO", "MS", "MT", "NC", "ND", "NE", "OH", "OK", "SC", "SD", "TN", "TX", "UT", "WV", "WY" ] and the blue party wins all the other states, how many more votes will the blue party receive than the red party?

const election = (input) => {
  const states = {
    AL: 9,
    MT: 3,
    AK: 3,
    NE: 5,
    AZ: 11,
    NV: 6,
    AR: 6,
    NH: 4,
    CA: 55,
    NJ: 14,
    CO: 9,
    NM: 5,
    CT: 7,
    NY: 29,
    DE: 3,
    NC: 15,
    FL: 29,
    ND: 3,
    GA: 16,
    OH: 18,
    HI: 4,
    OK: 7,
    ID: 4,
    OR: 7,
    IL: 20,
    PA: 20,
    IN: 11,
    RI: 4,
    IA: 6,
    SC: 9,
    KS: 6,
    SD: 3,
    KY: 8,
    TN: 11,
    LA: 8,
    TX: 38,
    ME: 4,
    UT: 6,
    MD: 10,
    VT: 3,
    MA: 11,
    VA: 13,
    MI: 16,
    WA: 12,
    MN: 10,
    WV: 5,
    MS: 6,
    WI: 10,
    MO: 10,
    WY: 3,
    DC: 3,
  };

  let redParty = 0;
  let blueParty = 0

  for (let i = 0; i < input.length; i++) {
    redParty += states[input[i]];
    delete states[input[i]];
  };

  for (state in states) {
    blueParty += states[state];
  };

  console.log('blueParty', blueParty);
  console.log('redParty', redParty);

  return blueParty - redParty;
};
