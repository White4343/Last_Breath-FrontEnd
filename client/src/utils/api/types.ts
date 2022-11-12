export interface IMovieItem {
    id: string
    name: string
    poster: string
}

export interface ITestMovieItem {
    "id": string,
    "name": string,
    "video": string,
    "poster": string,
    "trailer": string,
    "premier": string,
    "release_date": string,
    "length": string,
    "cast": string,
    "ageLimit": string,
    "producer": string,
    "language": string,
    "country": string
}

export interface ICinema {
    id: string
    city: string
    cinemaName: string
    cinemaStreet: string
}

export interface IReqUser {
    email?: string
    password?: string
    rememberMe?: boolean
}


export interface IResUser {
    refresh: string
    access: string
}

export interface IUser {
    username?: string
    first_name?: string
    last_name?: string
    birth_date?: string
    role?: string
    email?: string
    password?: string
}

export interface DateOfBirth {
    month: string
    day: string
    year: string
}

export interface IChangePassword {
    old_password: string
    password: string
    password2: string
}