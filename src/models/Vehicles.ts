import { Users } from "./Users"

export class Vehicles{

    number: string
    name: string
    driver: Users

    constructor(number: string, name: string, driver: Users) {
        this.number = number
        this.name = name
        this.driver = driver
    }
}

export class VehiclesDB{

    vehicles: Vehicles[]

    constructor() {
        this.vehicles = []
    }

    add_vehicle(vehicle: Vehicles) {
        this.vehicles.push(vehicle)
    }

    allVehicles() {
        return this.vehicles
    }
}