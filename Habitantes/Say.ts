interface Say {
    say(): string
}

class BaseSay implements Say {
    say(): string {
        return 'Saludos!'
    }
}

class CatSay implements Say {
    say(): string {
        return 'Miau'
    }
}

class CanineSay implements Say {
    say(): string {
        return 'Guau'
    }
}

export type {
    Say
}

export {
    BaseSay,
    CatSay,
    CanineSay
}