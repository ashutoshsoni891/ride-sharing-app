import { Rides } from "./Rides"
import { Users } from "./Users"
import { Vehicles } from "./Vehicles"

export class OfferedRides extends Rides{

	vehicle: Vehicles
	driver: Users
    constructor(source: string, destination: string,availableSeats: number, vehicle: Vehicles, driver: Users) {
        super(source, destination, availableSeats)
        this.vehicle = vehicle
        this.driver = driver
    }
}

export class OfferedRidesDB {

    offeredRides: OfferedRides[]

    constructor() {
        this.offeredRides = []
    }

    offer_ride(offeredRides: OfferedRides) {
        const offeredRideExists = this.offeredRides.some(ride => ride.vehicle.number === offeredRides.vehicle.number)

        // console.log('offeredRideExists :---> ', offeredRideExists, offeredRides)

        if (offeredRideExists) {
            console.log('Ride Already Exists!', OfferedRides)
            return
        }

        return this.offeredRides.push(offeredRides)
    }

    allOfferedRides() {
        return this.offeredRides
    }
}