import { OfferedRides, OfferedRidesDB } from "./src/models/OfferedRides";
import { SelectedRides, SelectedRidesDB } from "./src/models/SelectedRides";
import { Users, UsersDB } from "./src/models/Users";
import { Vehicles, VehiclesDB } from "./src/models/Vehicles";

const userDB = new UsersDB()
const vehicleDB = new VehiclesDB()
const offeredRideDB = new OfferedRidesDB()
const selectedRideDB = new SelectedRidesDB()

const user1 = new Users("Rohan", "M", 36, "DRIVER")
const v1 = new Vehicles("KA-01-12345", "Swift", user1)

const user2 = new Users("Shashank", "M", 29, "DRIVER")
const v2 = new Vehicles("TS-05-62395", "Baleno", user2)

const user3 = new Users("Nandini", "F", 29, "PASSENGER")

const user4 = new Users("Shipra", "F", 27, "DRIVER")
const v3 = new Vehicles("KA-05-41491", "Polo", user4)
const v4 = new Vehicles("KA-12-12332", "Activa", user4)

const user5 = new Users("Gaurav", "M", 29, "PASSENGER")

const user6 = new Users("Rahul", "M", 35, "DRIVER")
const v5 = new Vehicles("KA-05-1234", "XUV", user6)

userDB.add_user(user1)
vehicleDB.add_vehicle(v1)

userDB.add_user(user2)
vehicleDB.add_vehicle(v2)

userDB.add_user(user3)

userDB.add_user(user4)
vehicleDB.add_vehicle(v3)
vehicleDB.add_vehicle(v4)

userDB.add_user(user5)

userDB.add_user(user6)
vehicleDB.add_vehicle(v5)

// console.log(userDB.allUsers(), vehicleDB.allVehicles())

const or1 = new OfferedRides('Hydrabad', 'Banglore', 1, v1, user1)
const or2 = new OfferedRides('Banglore', 'Mysore', 1, v4, user4)
const or3 = new OfferedRides('Banglore', 'Mysore', 2, v3, user4)
const or4 = new OfferedRides('Hydrabad', 'Banglore', 2, v2, user2)
const or5 = new OfferedRides('Hydrabad', 'Banglore', 5, v5, user6)
const or6 = new OfferedRides('Banglore', 'Pune', 1,v1, user1)


offeredRideDB.offer_ride(or1)
offeredRideDB.offer_ride(or2)
offeredRideDB.offer_ride(or3)
offeredRideDB.offer_ride(or4)
offeredRideDB.offer_ride(or5)
offeredRideDB.offer_ride(or6)

const allOfferedRides = offeredRideDB.allOfferedRides()
const r1 = new SelectedRides('Banglore', 'Mysore', 1, user3, allOfferedRides,'', true)
const r2 = new SelectedRides('Banglore', 'Mysore', 1, user5, allOfferedRides, 'Activa')
const r3 = new SelectedRides('Mumbai', 'Banglore', 1, user2 , allOfferedRides, '', true)
const r4 = new SelectedRides('Hydrabad', 'Banglore', 1, user1 , allOfferedRides, 'Baleno')
const r5 = new SelectedRides('Hydrabad', 'Banglore', 1, user1 , allOfferedRides, 'Polo')


const s1 = selectedRideDB.select_ride(r1)
const s2 = selectedRideDB.select_ride(r2)
const s3 = selectedRideDB.select_ride(r3)
const s4 = selectedRideDB.select_ride(r4)
const s5 = selectedRideDB.select_ride(r5)


// console.log('SELECTED RIDE :---> ', s1,s2,s3,s4,s5)
// console.log('SELECTED RIDES :---> ', selectedRideDB.allSelectedRides())
const e1 = selectedRideDB.end_ride(s1!)
const e2 = selectedRideDB.end_ride(s2!)
const e3 = selectedRideDB.end_ride(s3!)
const e4 = selectedRideDB.end_ride(s4!)
const e5 = selectedRideDB.end_ride(s5!)


// console.log('RIDE ENDED :---> ', e1, e2, e3, e4)

selectedRideDB.print_ride_stats()