SW = 'Switzerland'
AU = 'Austria'
GR = 'Germany'
IT = 'Italy'
FR = 'France'
PL = 'Poland'
SP = 'Spain'
UK = 'United Kingdom'

countries_graph = {
    SW: [GR, IT, FR],
    PL: [AU],
    GR: [PL],
    IT: [AU],
    FR: [SP, UK],
    AU: [],
    SP: [],
    UK: [],
}
