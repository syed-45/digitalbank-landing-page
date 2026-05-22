export function calculateTimePosted(date: Date) {
    const currDate = new Date()
    const timeDifference = currDate.getTime() - date.getTime()
    if (timeDifference < 1000 * 60) {
        const time = Math.floor(timeDifference / 1000)
        return `${time} second${time === 1 ? '' : 's'} ago`
    }
    if (timeDifference < 1000 * 60 * 60) {
        const time = Math.floor(timeDifference / 1000 / 60)
        return `${time} minute${time === 1 ? '' : 's'} ago`
    }
    if (timeDifference < 1000 * 60 * 60 * 24) {
        const time = Math.floor(timeDifference / 1000 / 60 / 60)
        return `${time} hour${time === 1 ? '' : 's'} ago`
    }
    if (timeDifference < 1000 * 60 * 60 * 24 * 7) {
        const time = Math.floor(timeDifference / 1000 / 60 / 60 / 24)
        return `${time} day${time === 1 ? '' : 's'} ago`
    }
    if (timeDifference < 1000 * 60 * 60 * 24 * 7 * 4) {
        const time = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 7)
        return `${time} week${time === 1 ? '' : 's'} ago`
    }
    if (timeDifference < 1000 * 60 * 60 * 24 * 30 * 12) {
        const time = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 30)
        return `${time} month${time === 1 ? '' : 's'} ago`
    }    
    return 'Over a year ago'
}

/*
console.log(calculateTimePosted(new Date(2026,4,22,13,23, ))) //mins
console.log(calculateTimePosted(new Date(2026,4,22,11,10, ))) //hr
console.log(calculateTimePosted(new Date(2026,4,20,11,10, ))) //days
console.log(calculateTimePosted(new Date(2026,4,10,11,10, ))) //days
console.log(calculateTimePosted(new Date(2026,0,22,11,10, ))) //months
console.log(calculateTimePosted(new Date(2022,4,22,11,10, ))) //year ago
*/