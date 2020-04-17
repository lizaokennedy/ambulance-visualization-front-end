import {Model, Collection} from 'vue-mc'

class Simulation extends Model {

     // Default attributes that define the "empty" state.
     defaults() {
        return {
            id:   null,
            year: null,
            startTime: null,
            endTime: null,
            duration: null,
            status: false,
        }
    }

    // Attribute mutations.
    mutations() {
        return {
            id: (id:number) => Number(id) || null,
            year: (year:number) => Number(year) || null,
            startTime: (startTime:number) => Number(startTime) || null,
            endTime: (endTime:number) => Number(endTime) || null,
            duration: (duration:number) => Number(duration) || null,
            status: Boolean,
        }
    }
    // //How to create own functions
    // get version() {
    //     return this.id;
    // }

}

class Simulations extends Collection {
     // Model that is contained in this collection.
     model() {
        return Simulation;
    }

    // Default attributes
    defaults() {
        return {
            orderBy: 'id',
        }
    }

    get num_sims () {
        return this.sum('id')
    }


}