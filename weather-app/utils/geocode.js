const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoiam9hb2F2ZWxpbm8iLCJhIjoiY2swODN4aHRqMGU1ODNtcDB1MG5vczlqOCJ9.nHW4TUigcGF7mLNOCD9JSw'
    request({url, json: true }, (error, {body}) => {
        //console.log(response.body)

        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode