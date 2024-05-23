import { Users } from "./Users"
import { Vehicles } from "./Vehicles"

export class Rides{

    source: string
	destination: string
	availableSeats: number

    constructor(source: string, destination: string, availableSeats: number) {
        this.source = source
        this.destination = destination
        this.availableSeats = availableSeats
    }
}
