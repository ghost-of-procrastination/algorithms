export const LA = 'Los Angeles'
export const SF = 'San Francisco'
export const AU = 'Austin'
export const NY = 'New York'
export const BT = 'Boston'
export const MA = 'Miami'
export const SE = 'Seattle'
export const DE = 'Detroit'

export const citiesGraph = {
    [LA]: [SF, AU],
    [SF]: [LA, SE],
    [AU]: [LA, NY, MA],
    [NY]: [AU, BT, MA, DE],
    [BT]: [NY],
    [MA]: [NY, AU],
    [SE]: [SF],
    [DE]: [NY]
}
