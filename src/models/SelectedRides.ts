import { OfferedRides } from "./OfferedRides"
import { Rides } from "./Rides"
import { Users } from "./Users"

export class SelectedRides extends Rides{

    passenger: Users
    rides?: OfferedRides[]
    offeredRide?: OfferedRides
    mostVacant?: boolean
    preferredVehicle?: string
	driver?: Users
	rideEnded?: boolean

    constructor(source: string, destination: string, availableSeats: number,
        passenger: Users, rides?: OfferedRides[], preferredVehicle?: string, mostVacant?: boolean) {

        super(source, destination, availableSeats)
        this.passenger = passenger
        this.rides = rides
        this.preferredVehicle = preferredVehicle
        this.mostVacant = mostVacant

    }
}

export class SelectedRidesDB{

    selectedRides: SelectedRides[]

    constructor() {
        this.selectedRides = []
    }


    select_ride(selectedRides: SelectedRides) {
        const rides = selectedRides.rides?.sort((a, b) => {
            if (a.availableSeats > b.availableSeats) return -1
            if (a.availableSeats < b.availableSeats) return 1
            return 0
        })

        const rideStrategy = selectedRides.mostVacant ? 'MOST_VACANT': selectedRides.preferredVehicle

        if (!rides || !rideStrategy) return

        const source = selectedRides.source
        const destination = selectedRides.destination
        const availableSeats = selectedRides.availableSeats

        // match source , destination , seats, strategy
        const matchRide = rides.find((ride) => {
            const matchPath = source === ride.source && destination === ride.destination
            const matchSeats = ride.availableSeats >= availableSeats
            const matchStrategy = rideStrategy === 'MOST_VACANT' ? true : ride.vehicle.name === rideStrategy

            if (matchPath && matchSeats && matchStrategy) return ride
            return null
        })

        const selectedRide: SelectedRides = {
            ...selectedRides,
            offeredRide: matchRide,
            driver: matchRide?.vehicle.driver,
        }

        this.selectedRides.push(selectedRide)
        return selectedRide
    }

    end_ride(selectedRide: SelectedRides) {
        const ride = this.selectedRides.find(ride => ride.offeredRide?.vehicle.number === selectedRide.offeredRide?.vehicle.number)

        if (ride) {
            ride.rideEnded = true
            return ride
        }

    }

    print_ride_stats() {

        let d: any = { }
        //look for passenger and driver
        this.selectedRides.forEach((ride) => {

            const passenger = ride.passenger.name
            const driver = ride.driver?.name
            console.log('PASSENGER AND DRIVER :---> ', passenger, driver)

            if (passenger && d[passenger]) {
                console.log('passenger if')
                d[passenger]['taken'] += 1
            }
            else {
                console.log('passenger else')
                d[passenger] = {
                    taken: 1,
                    offered: 0
                }
            }

            if (driver && d[driver]) {
                d[driver]['offered'] += 1
            }
            else if(driver) {
                d[driver] = {
                    offered: 1,
                    taken: 0
                }
            }
        })

        Object.entries(d).map((k, v: any) => {
            console.log(k, v,v['taken'], v['offered'])
        })
    }

    allSelectedRides() {
        return this.selectedRides
    }
}