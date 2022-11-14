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

export interface ISession {
    "base_price": number,
    "cinemahall": number,
    "cinemahall_detail": {
        "cinema": number
        "cinema_name": string
        "id": number
        "number": number

    },
    "date": string,
    "end_time": string,
    "id": number,
    "movie": number,
    "movie_name": number,
    "movie_poster": number,
    "seats": Array<object>,
    "start_time":string
}
export interface niceBackEnd {
    "cinema" : string,
    "time" : string,
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

export interface IReqSessionByDate {
    date?: string
    cinema?: number
}
export interface IResUser {
    refresh: string
    access: string
}

export interface ISessionItem {
    label: string,
    dates: Array<string>
}
export interface ISessionByDate {
    "id": number,
    "number": number,
    "cinema": number,
    "cinema_name": string,
    "sessions":  [
        {
            "id": number,
            "date": string,
            "start_time": string,
            "end_time": string,
            "base_price": number,
            "movie": number,
            "movie_name": string,
            "movie_poster": string,
            "cinemahall": number,
            "cinemahall_detail": {
                "id": number,
                "number": number,
                "cinema": number
                "cinema_name": string
            },
            "seats": []
        }
    ]
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

export interface iChangePayment {
    card_number: string
    expiration_date: string
    cvv: number
}