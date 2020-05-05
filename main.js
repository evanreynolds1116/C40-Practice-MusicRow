// Practice: Music Row
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.

// Create an array for each of these record labels.

const JumpStopRecords = []
const ChattenRecords = []
const PolarRecords = []

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

const createBluegrassArtist = (name, age) => ({
  "artistName": name,
  "artistGenre": "Bluegrass",
  "artistAge": age
})

const createCountryArtist = (name, age) => ({
  "artistName": name,
  "artistGenre": "Country",
  "artistAge": age
})

const createFunkArtist = (name, age) => ({
  "artistName": name,
  "artistGenre": "Funk",
  "artistAge": age
})

const createRapArtist = (name, age) => ({
  "artistName": name,
  "artistGenre": "Rap",
  "artistAge": age
})

const createPopArtist = (name, age) => ({
  "artistName": name,
  "artistGenre": "Pop",
  "artistAge": age
})

// Bruce Atikins is a Country artist and is 23 years old

ChattenRecords.push(createCountryArtist("Bruce Atkins", 23))

// Jensen Brown is a Pop artist and is 20 years old

PolarRecords.push(createPopArtist("Jensen Brown", 20))

// Dre Funkz is a Funk artist and is 25 years old

JumpStopRecords.push(createFunkArtist("Dre Funkz", 25))

// Dusta Grimes is a Rap artist and is 21 years old

JumpStopRecords.push(createRapArtist("Dusta Grimes", 21))

// Bartholomew Danielson is a Bluegrass artist and is 23 years old

ChattenRecords.push(createBluegrassArtist("Bartholomew Danielson", 23))

// Avilee Dallas is a Country artist and is 19 years old

ChattenRecords.push(createCountryArtist("Aville Dallas", 19))

// Austin Kinkaid is a Pop artist and is 22 years old

PolarRecords.push(createPopArtist("Austin Kinkaid", 22))

// Loyoncé Branis is a Rap artist and is 27 years old

JumpStopRecords.push(createRapArtist("Loyonce Branis", 27))

console.log(ChattenRecords)
console.log(JumpStopRecords)
console.log(PolarRecords)