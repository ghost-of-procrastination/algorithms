LA = 'Los Angeles'
SF = 'San Francisco'
AU = 'Austin'
NY = 'New York'
BT = 'Boston'
MA = 'Miami'
SE = 'Seattle'
DE = 'Detroit'

cities_graph = {
    LA: [SF, AU],
    SF: [LA, SE],
    AU: [LA, NY, MA],
    NY: [AU, BT, MA, DE],
    BT: [NY],
    MA: [NY, AU],
    SE: [SF],
    DE: [NY]
}
