const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//const yargs = require('yargs')

console.log(process.argv)

const address = process.argv[2]

if (!address){
    console.log('Please provide a address.')
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error){
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}


