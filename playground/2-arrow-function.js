// const square = function(x){
//     return x*x
// }

// const square = (x) =>{
//     return x*x
// }

// const square = (x) => x*x

// console.log(square())

const event = {
    name: 'Birthday Party',
    guestList: ['A', 'B', 'C'],
    printGuestList() {

        console.log('guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest+' '+'is attending '+this.name)
        })

    }
}


event.printGuestList()