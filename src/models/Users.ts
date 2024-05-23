

export type genderType = 'M' | 'F'
export type userType = 'PASSENGER' | 'DRIVER'

export class Users{

    name: string
    gender: genderType
    age: number
    userType: userType

    constructor(name: string, gender: genderType, age: number, userType: userType) {
        this.name = name
        this.gender = gender
        this.age = age
        this.userType = userType
    }
}

export class UsersDB{

    users: Users[]

    constructor() {
        this.users = []
    }

    add_user(user: Users) {
        this.users.push(user)
    }

    allUsers() {
        console.log(this.users)
        return this.users
    }
}