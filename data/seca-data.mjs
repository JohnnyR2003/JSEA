
import fetch from 'node-fetch'

export async function makeRequest(list, action, limit, page, id, name) {
    let l
    if (!isNaN(limit))
        l = limit
    else
        l = 6

    let p
    if (!isNaN(page))
        p = page - 1
    else
        p = 0

    let URL
    if (action == PopularEvents) URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=${l}&page=${p}&apikey=f8VdrRIfAeuvJHoieqRpgQDasaXJAMX2`
    else if (action == getEventsByName) URL = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${name}&size=${l}&page=${p}&apikey=f8VdrRIfAeuvJHoieqRpgQDasaXJAMX2`
    else URL = `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=f8VdrRIfAeuvJHoieqRpgQDasaXJAMX2`
    try {
        let rsp = await fetch(URL)
        let obj = await rsp.json()
        return action(obj, list)
    } catch (e) {
        console.log(e)

    }
}

export function PopularEvents(obj, listOfEvents) {
    //let date = obj["_embedded"].events.dates['start'].localDate
    //obj["_embedded"].events.forEach(event => listOfEvents.push({EventId: event.id, eventName: event.name, eventDate : event.dates['start'].localDate}));
    let sortedEvents = sortEventsByDate(obj["_embedded"].events)
    sortedEvents.forEach(event => listOfEvents.push({ EventId: event.id, eventName: event.name, eventDate: event.dates['start'].localDate }));
}

function sortEventsByDate(listOfEvents) {
    return listOfEvents.sort((a, b) => {
        let dateA = new Date(a.dates['start'].localDate);
        let dateB = new Date(b.dates['start'].localDate);
        return dateA - dateB;
    });
}

export function getEventsByName(obj, listOfEvents) {
    obj["_embedded"].events.forEach(event => listOfEvents.push({EventId: event.id, eventName: event.name, eventDate: event.dates['start'].localDate}));
}

export function getEventsNotById(obj){
    console.log(obj.id)
        let eventDetails = {
                            id : obj.id, 
                            name: obj.name, 
                            date: obj.dates['start'].localDate,
                            genre: obj.classifications[0].genre['name'],
                            subgenre: obj.classifications[0].subGenre['name'],
                            segment: obj.classifications[0].segment['name'],
                            image: obj.images[0].url,
                            salesStart: obj.sales.public.startDateTime,
                            salesEnd: obj.sales.public.endDateTime,
                        };

        return eventDetails
}

export function getEventDetails(obj){

    let genre = obj.classifications[0].genre
    let segment = obj.classifications[0].segment
    //console.log(genre)

    let event = {
        name: obj.name,
        date: obj.dates.start.localDate,
        genre: genre['name'],
        segment: segment['name'],
        image: obj.images[0].url,
    }

    //console.log(event)
    return event
}
