// Q2 -

const characters = [
  {
    name: "Eddard",
    spouse: "Catelyn",
    children: ["Robb", "Sansa", "Arya", "Bran", "Rickon"],
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: "Lysa",
    children: ["Robin"],
    house: "Arryn",
  },
  {
    name: "Cersei",
    spouse: "Robert",
    children: ["Joffrey", "Myrcella", "Tommen"],
    house: "Lannister",
  },
  {
    name: "Daenarys",
    spouse: "Khal Drogo",
    children: ["Drogon", "Rhaegal", "Viserion"],
    house: "Targaryen",
  },
  {
    name: "Mace",
    spouse: "Alerie",
    children: ["Margaery", "Loras"],
    house: "Tyrell",
  },
  {
    name: "Sansa",
    spouse: "Tyrion",
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: null,
    house: "Snow",
  },
];

const countNumberOfChildren = (arr) => {
    // Solution code here...
    var count =0
    arr.forEach(element => {
        for (const key in element) {
           count++
        }
    });
    return count
  };

const extractChildren = (arr) => {
    // Solution code here...
    return arr.filter(e=>e.includes("a"))
  };