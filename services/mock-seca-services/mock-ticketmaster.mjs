export async function makeRequest(list, action, limit, page, id, name) {
    let l
    if (!isNaN(limit))
        l = limit
    else
        l = 30

    let p
    if (!isNaN(page))
        p = page - 1
    else
        p = 0

    let URL
    if (action == PopularEvents) URL = topEvents
    else if (action == getEventsByName) URL = getEventName
    else URL = eventId
    /*try {
        let rsp = await fetch(URL)
        let obj = await rsp.json()
        //console.log(obj)
        return action(obj, list)
    } catch (e) {
        console.log(e)

    }*/
    return action(URL, list)
}

export function PopularEvents(obj, listOfEvents) {
    obj["_embedded"].events.forEach(event => listOfEvents.push({"Event id": event.id, "event name": event.name, "event date": event.dates['start'].localDate}));
}

export function getEventsByName(obj, listOfEvents) {
    obj["_embedded"].events.forEach(event => listOfEvents.push({"Event id": event.id, "event name": event.name, "event date": event.dates['start'].localDate}));
}

export function getEventDetails(obj){

    let genre = obj.classifications[0].genre
    let segment = obj.classifications[0].segment
    //console.log(genre)

    let event = {
        name: obj.name,
        date: obj.dates.start.localDate,
        genre: genre['name'],
        segment: segment['name']
    }

    //console.log(event)
    return event
}

export const topEvents = {
    "_embedded": {
        "events": [
            {
                "name": "Phoenix Suns vs. Golden State Warriors",
                "type": "event",
                "id": "G5v0Z9Yc3zOy3",
                "test": false,
                "url": "https://www.ticketmaster.com/phoenix-suns-vs-golden-state-warriors-phoenix-arizona-11-22-2023/event/19005F0B52E20E52",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2023-08-18T17:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-11-23T04:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2023-08-18T16:00:00Z",
                            "endDateTime": "2023-08-18T16:45:00Z",
                            "name": "SMS Presale"
                        },
                        {
                            "startDateTime": "2023-08-18T16:00:00Z",
                            "endDateTime": "2023-08-18T16:45:00Z",
                            "name": "68 Reserve Presale"
                        },
                        {
                            "startDateTime": "2023-08-17T19:00:00Z",
                            "endDateTime": "2023-11-23T05:00:00Z",
                            "name": "Resale Onsale"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2023-11-22",
                        "localTime": "20:00:00",
                        "dateTime": "2023-11-23T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Phoenix",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nE",
                            "name": "Sports"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAde",
                            "name": "Basketball"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vFJA",
                            "name": "NBA"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7l1",
                            "name": "Group"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA7d",
                            "name": "Team"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "695",
                    "name": "NBA REGULAR SEASON",
                    "description": "NBA REGULAR SEASON / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "695",
                        "name": "NBA REGULAR SEASON",
                        "description": "NBA REGULAR SEASON / NTL / USA"
                    }
                ],
                "info": "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
                "pleaseNote": "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 94,
                        "max": 7000
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ FOOTPRINT CENTER",
                        "id": "G5v0Z9YyHms6U",
                        "url": "https://www.ticketmaster.com/parkwhiz-footprint-center-phoenix-arizona-11-22-2023/event/19005F0E7CBB11F6",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/19005F0B52E20E52/staticImage?type=png&systemId=HOST"
                },
                "accessibility": {
                    "ticketLimit": 4
                },
                "ticketLimit": {
                    "info": "There is an overall four (4) ticket limit for presales and first day of general onsale. Standard ticket limit is six (6)."
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    }
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/G5v0Z9Yc3zOy3?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Footprint Center",
                            "type": "venue",
                            "id": "KovZpZAE617A",
                            "test": false,
                            "url": "https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22218v.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "postalCode": "85004",
                            "timezone": "America/Phoenix",
                            "city": {
                                "name": "Phoenix"
                            },
                            "state": {
                                "name": "Arizona",
                                "stateCode": "AZ"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "201 East Jefferson Street"
                            },
                            "location": {
                                "longitude": "-112.071313",
                                "latitude": "33.445899"
                            },
                            "markets": [
                                {
                                    "name": "Phoenix and Tucson",
                                    "id": "36"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 359
                                },
                                {
                                    "id": 402
                                },
                                {
                                    "id": 420
                                }
                            ],
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867",
                                "openHoursDetail": "The Footprint Center ticket office will be open at 3pm on weekday events and three (3) hours prior to event time for weekends. For any further questions or ticket inquiries, please reach out to feedback@suns.com or call the Footprint Center ticket office at (602) 379-7800.",
                                "acceptedPaymentDetail": "The Footprint Center accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS",
                                "willCallDetail": "The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavilion. WILL CALL PICK-UP: The Footprint Center requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up."
                            },
                            "parkingDetail": "Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472",
                            "accessibleSeatingDetail": "PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.",
                            "generalInfo": {
                                "generalRule": "New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than \"assisting\" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed",
                                "childRule": "Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 73,
                                "_total": 73,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Phoenix Suns",
                            "type": "attraction",
                            "id": "K8vZ9171oZf",
                            "test": false,
                            "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            "locale": "en-us",
                            "externalLinks": {
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/Suns"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/suns/"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/suns/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            "aliases": [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            "images": [
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nE",
                                        "name": "Sports"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAde",
                                        "name": "Basketball"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFJA",
                                        "name": "NBA"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7d",
                                        "name": "Team"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 8,
                                "ticketmaster": 60,
                                "_total": 68,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Golden State Warriors",
                            "type": "attraction",
                            "id": "K8vZ9171oa0",
                            "test": false,
                            "url": "https://www.ticketmaster.com/golden-state-warriors-tickets/artist/805946",
                            "locale": "en-us",
                            "externalLinks": {
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/warriors"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Golden_State_Warriors"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/warriors"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/warriors"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "https://www.nba.com/warriors/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nE",
                                        "name": "Sports"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAde",
                                        "name": "Basketball"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFJA",
                                        "name": "NBA"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7d",
                                        "name": "Team"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 6,
                                "ticketmaster": 61,
                                "_total": 67,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Memphis Grizzlies vs. Phoenix Suns",
                "type": "event",
                "id": "G5viZ9YRGmPD8",
                "test": false,
                "url": "https://www.ticketmaster.com/memphis-grizzlies-vs-phoenix-suns-memphis-tennessee-11-24-2023/event/1B005F0BCCBA5ED0",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2023-08-17T22:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-11-24T23:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2023-08-17T20:00:00Z",
                            "endDateTime": "2023-08-17T21:59:00Z",
                            "name": "Advance Presale"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2023-11-24",
                        "localTime": "16:00:00",
                        "dateTime": "2023-11-24T22:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Chicago",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nE",
                            "name": "Sports"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAde",
                            "name": "Basketball"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vFJA",
                            "name": "NBA"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7l1",
                            "name": "Group"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA7d",
                            "name": "Team"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "695",
                    "name": "NBA REGULAR SEASON",
                    "description": "NBA REGULAR SEASON / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "695",
                        "name": "NBA REGULAR SEASON",
                        "description": "NBA REGULAR SEASON / NTL / USA"
                    }
                ],
                "pleaseNote": "Only clear bags made of plastic, vinyl or PVC no larger than 6x8x2 inches will be allowed inside FedExForum. Clear bags may not have an all-over print or decoration that prohibits full view of its contents and may contain a strap, but metal or chain straps are prohibited. Guests are also welcome to bring wallets (sized to be carried in the front or back pocket) no larger than 5x3.5 inches and one quart or smaller clear plastic storage/freezer bags. Clear bags and wallets compliant with the above will also be screened through X-Ray machines. Exceptions to this policy will be made for all medically necessary items after proper inspection.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 45,
                        "max": 439
                    }
                ],
                "products": [
                    {
                        "name": "NBA Parking Event",
                        "id": "G5viZ9YngSNbU",
                        "url": "https://www.ticketmaster.com/nba-parking-event-memphis-tennessee-11-24-2023/event/1B005F0AB5CE3636",
                        "type": "Parking",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7nE",
                                    "name": "Sports"
                                },
                                "genre": {
                                    "id": "KnvZfZ7vA7A",
                                    "name": "Miscellaneous"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vFIt",
                                    "name": "Miscellaneous"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7v7nI",
                                    "name": "Undefined"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7v7lJ",
                                    "name": "Undefined"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1B005F0BCCBA5ED0/staticImage?type=png&systemId=HOST"
                },
                "accessibility": {
                    "info": "*ADA Wheelchair and Companion seating may be available in 1+1 arrangement on the Floor.  In the Plaza, Club, and Terrace Levels, ADA Wheelchair and Companion seating is available in 1+2, 2+1, 2+2, 1+3, and 3+1 arrangements.",
                    "ticketLimit": 4
                },
                "ticketLimit": {
                    "info": "There is a 4 ticket limit for this event."
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true
                    },
                    "allInclusivePricing": {
                        "enabled": true
                    }
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/G5viZ9YRGmPD8?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAE6vlA?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "FedExForum",
                            "type": "venue",
                            "id": "KovZpZAE6vlA",
                            "test": false,
                            "url": "https://www.ticketmaster.com/fedexforum-tickets-memphis/venue/222094",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dbimages/12624v.gif",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                }
                            ],
                            "postalCode": "38103",
                            "timezone": "America/Chicago",
                            "city": {
                                "name": "Memphis"
                            },
                            "state": {
                                "name": "Tennessee",
                                "stateCode": "TN"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "191 Beale Street"
                            },
                            "location": {
                                "longitude": "-90.0514933",
                                "latitude": "35.1394709"
                            },
                            "markets": [
                                {
                                    "name": " Little Rock & More\"",
                                    "id": "29"
                                },
                                {
                                    "name": "All of US",
                                    "id": "51"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 200
                                },
                                {
                                    "id": 280
                                },
                                {
                                    "id": 305
                                },
                                {
                                    "id": 308
                                },
                                {
                                    "id": 323
                                },
                                {
                                    "id": 332
                                }
                            ],
                            "social": {
                                "twitter": {
                                    "handle": "@fedexforum"
                                }
                            },
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "901-205-2640 901-888-HOOP (4667) - Memphis Grizzlies",
                                "openHoursDetail": "Monday - Friday 10:00am - 5:30pm",
                                "acceptedPaymentDetail": "American Express, MasterCard, Visa, Discover, Cash and Money Order.",
                                "willCallDetail": "Will call is located at the main FedExForum Box Office and is open the day of the event during regular business hours."
                            },
                            "parkingDetail": "Parking is available onsite or at the other garages and lots in the surrounding area.",
                            "accessibleSeatingDetail": "This is an accessible venue.",
                            "generalInfo": {
                                "generalRule": "No cameras or tape recorders allowed. Still cameras allowed at some events check with venue per individual event.",
                                "childRule": "Venue rules vary by event. Please contact the box office for details on specific shows."
                            },
                            "upcomingEvents": {
                                "tmr": 13,
                                "ticketmaster": 52,
                                "_total": 65,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAE6vlA?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Memphis Grizzlies",
                            "type": "attraction",
                            "id": "K8vZ9171Kg7",
                            "test": false,
                            "url": "https://www.ticketmaster.com/memphis-grizzlies-tickets/artist/806038",
                            "locale": "en-us",
                            "externalLinks": {
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/memgrizz"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Memphis_Grizzlies"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/MemphisGrizzlies"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://instagram.com/memgrizz"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "https://www.nba.com/grizzlies/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nE",
                                        "name": "Sports"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAde",
                                        "name": "Basketball"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFJA",
                                        "name": "NBA"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7d",
                                        "name": "Team"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 8,
                                "ticketmaster": 62,
                                "_total": 70,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9171Kg7?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Phoenix Suns",
                            "type": "attraction",
                            "id": "K8vZ9171oZf",
                            "test": false,
                            "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            "locale": "en-us",
                            "externalLinks": {
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/Suns"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/suns/"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/suns/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            "aliases": [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            "images": [
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nE",
                                        "name": "Sports"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAde",
                                        "name": "Basketball"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFJA",
                                        "name": "NBA"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7d",
                                        "name": "Team"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 8,
                                "ticketmaster": 60,
                                "_total": 68,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Atlanta Hawks vs. Phoenix Suns",
                "type": "event",
                "id": "vvG1zZ9YJwb39L",
                "test": false,
                "url": "https://www.ticketmaster.com/atlanta-hawks-vs-phoenix-suns-atlanta-georgia-02-02-2024/event/0E005F09B26125DF",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2023-08-28T14:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-02-03T01:30:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2023-08-24T15:00:00Z",
                            "endDateTime": "2023-08-28T03:59:00Z",
                            "name": "Chase Presale"
                        },
                        {
                            "startDateTime": "2023-08-24T16:00:00Z",
                            "endDateTime": "2023-08-28T03:59:00Z",
                            "name": "Hawks Presale"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-02-02",
                        "localTime": "19:30:00",
                        "dateTime": "2024-02-03T00:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/New_York",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nE",
                            "name": "Sports"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAde",
                            "name": "Basketball"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vFJA",
                            "name": "NBA"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7l1",
                            "name": "Group"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA7d",
                            "name": "Team"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "695",
                    "name": "NBA REGULAR SEASON",
                    "description": "NBA REGULAR SEASON / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "695",
                        "name": "NBA REGULAR SEASON",
                        "description": "NBA REGULAR SEASON / NTL / USA"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 59,
                        "max": 981
                    }
                ],
                "products": [
                    {
                        "name": "State Farm Arena Parking Hawks vs. Phoenix Suns",
                        "id": "vvG1zZ9YEvq3H7",
                        "url": "https://www.ticketmaster.com/state-farm-arena-parking-hawks-vs-atlanta-georgia-02-02-2024/event/0E005F09C1752F04",
                        "type": "Parking",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0E005F09B26125DF/staticImage?type=png&systemId=HOST"
                },
                "accessibility": {},
                "ticketLimit": {
                    "info": "There is an overall 6 ticket limit for this event."
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    }
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG1zZ9YJwb39L?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ91718XV?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpa2Xke?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "State Farm Arena",
                            "type": "venue",
                            "id": "KovZpa2Xke",
                            "test": false,
                            "url": "https://www.ticketmaster.com/state-farm-arena-tickets-atlanta/venue/114689",
                            "locale": "en-us",
                            "aliases": [
                                "phillips areana",
                                "philips arena",
                                "phillips arena"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22348v.jpg",
                                    "width": 450,
                                    "height": 255,
                                    "fallback": false
                                }
                            ],
                            "postalCode": "30303",
                            "timezone": "America/New_York",
                            "city": {
                                "name": "Atlanta"
                            },
                            "state": {
                                "name": "Georgia",
                                "stateCode": "GA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "One State Farm Drive"
                            },
                            "location": {
                                "longitude": "-84.394569",
                                "latitude": "33.757796"
                            },
                            "markets": [
                                {
                                    "name": "Atlanta",
                                    "id": "10"
                                },
                                {
                                    "name": "All of US",
                                    "id": "51"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 200
                                },
                                {
                                    "id": 220
                                },
                                {
                                    "id": 221
                                },
                                {
                                    "id": 258
                                },
                                {
                                    "id": 327
                                },
                                {
                                    "id": 384
                                }
                            ],
                            "social": {
                                "twitter": {
                                    "handle": "@statefarmarena"
                                }
                            },
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "404-878-3000 - State Farm Arena Box Office 1-866-715-1500 - Atlanta Hawks",
                                "openHoursDetail": "The Box Office is open on event days and for the first day of all on-sales. (Hours will vary based upon the events and time of on-sales).",
                                "acceptedPaymentDetail": "Accepts: cash, Visa, Mastercard, Discover, American Express",
                                "willCallDetail": "Located at main box office on Centennial Olympic Park Drive. Available for pickup beginning 1 1/2 hours prior to event. Closing time will vary by event. PLEASE BRING A PICTURE ID, THE ACTUAL CREDIT CARD USED TO PURCHASE THE TICKETS, AND YOUR ORDER NUMBER."
                            },
                            "parkingDetail": "Parking is available in various lots around State Farm Arena including Centennial Garage and the CNN Deck located on Centennial Olympic Park Drive across from the arena. Both lots may be entered from Centennial Olympic Park Drive or Spring Street. Accessible parking is available in both lots. Price varies by event. The Philips Lot, located beneath the CNN Parking lot area, directly across from State Farm Arena, is adjacent to “The Gulch” and can be entered from the downward ramp on Centennial Olympic Park Drive.",
                            "accessibleSeatingDetail": "Accessible seating is available in throughout the arena in various price categories. Seating for the sight/hearing impaired available in the lower level. All accessible seating is subject to availability. All levels of the Arena are accessible by elevator and escalator.",
                            "generalInfo": {
                                "generalRule": "No smoking inside arena. No glass bottles, aluminum cans, coolers, thermoses, outside food, or alcoholic beverages No banners or laser pointers. No Backpacks.",
                                "childRule": "For most events, everyone two and older must have a ticket. For Sesame Street Live, children one and older must have a ticket. Please see the ticket information for each event."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 76,
                                "_total": 76,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpa2Xke?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Atlanta Hawks",
                            "type": "attraction",
                            "id": "K8vZ91718XV",
                            "test": false,
                            "url": "https://www.ticketmaster.com/atlanta-hawks-tickets/artist/805898",
                            "locale": "en-us",
                            "externalLinks": {
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/atlhawks"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/hawks"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Atlanta_Hawks"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/atlhawks"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "https://www.nba.com/hawks/"
                                    }
                                ]
                            },
                            "aliases": [
                                "alenta hawks",
                                "atlanta hawks"
                            ],
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nE",
                                        "name": "Sports"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAde",
                                        "name": "Basketball"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFJA",
                                        "name": "NBA"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7d",
                                        "name": "Team"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 6,
                                "ticketmaster": 63,
                                "_total": 69,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ91718XV?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Phoenix Suns",
                            "type": "attraction",
                            "id": "K8vZ9171oZf",
                            "test": false,
                            "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                            "locale": "en-us",
                            "externalLinks": {
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/Suns"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/suns/"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/suns/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "https://www.nba.com/suns/"
                                    }
                                ]
                            },
                            "aliases": [
                                "phoenix",
                                "suns",
                                "phoenix suns exchange",
                                "phoenix suns team exchange",
                                "phoenix suns season ticket holders",
                                "phoenix suns season tix holders",
                                "phoenix suns ticket exchange",
                                "suns exchange",
                                "suns season ticket holders",
                                "suns season tix holders",
                                "suns team exchange",
                                "suns ticket exchange"
                            ],
                            "images": [
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nE",
                                        "name": "Sports"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAde",
                                        "name": "Basketball"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFJA",
                                        "name": "NBA"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7d",
                                        "name": "Team"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 8,
                                "ticketmaster": 60,
                                "_total": 68,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    "_links": {
        "first": {
            "href": "/discovery/v2/events.json?page=0&size=3"
        },
        "self": {
            "href": "/discovery/v2/events.json?size=3&page=0"
        },
        "next": {
            "href": "/discovery/v2/events.json?page=1&size=3"
        },
        "last": {
            "href": "/discovery/v2/events.json?page=80750&size=3"
        }
    },
    "page": {
        "size": 3,
        "totalElements": 242251,
        "totalPages": 80751,
        "number": 0
    }
}


export const eventId = {
    "name": "New Orleans Pelicans vs. Los Angeles Lakers",
    "type": "event",
    "id": "Z7r9jZ1AdJ9ua",
    "test": false,
    "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdJ9ua",
    "locale": "en-us",
    "images": [
        {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
        },
        {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
        },
        {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
        },
        {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
        },
        {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
        },
        {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
        },
        {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
        },
        {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
        }
    ],
    "sales": {
        "public": {
            "startDateTime": "1900-01-01T18:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2024-01-01T00:00:00Z"
        }
    },
    "dates": {
        "start": {
            "localDate": "2023-12-31",
            "localTime": "18:00:00",
            "dateTime": "2024-01-01T00:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
        },
        "status": {
            "code": "onsale"
        },
        "spanMultipleDays": false
    },
    "classifications": [
        {
            "primary": true,
            "segment": {
                "id": "KZFzniwnSyZfZ7v7nE",
                "name": "Sports"
            },
            "genre": {
                "id": "KnvZfZ7vAde",
                "name": "Basketball"
            },
            "subGenre": {
                "id": "KZazBEonSMnZfZ7vFJA",
                "name": "NBA"
            },
            "family": false
        }
    ],
    "outlets": [
        {
            "url": "https://www.ticketmaster.com/new-orleans-pelicans-vs-los-angeles-new-orleans-louisiana-12-31-2023/event/Zu0FM1R0e5tf1BJ",
            "type": "tmMarketPlace"
        }
    ],
    "seatmap": {
        "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/1191-153-3-0-SmoothieKingCenterNOPelicans79303.png"
    },
    "ticketing": {
        "allInclusivePricing": {
            "enabled": false
        }
    },
    "_links": {
        "self": {
            "href": "/discovery/v2/events/Z7r9jZ1AdJ9ua?locale=en-us"
        },
        "attractions": [
            {
                "href": "/discovery/v2/attractions/K8vZ9171oaV?locale=en-us"
            },
            {
                "href": "/discovery/v2/attractions/K8vZ91718T0?locale=en-us"
            }
        ],
        "venues": [
            {
                "href": "/discovery/v2/venues/ZFr9jZee1e?locale=en-us"
            }
        ]
    },
    "_embedded": {
        "venues": [
            {
                "name": "Smoothie King Center",
                "type": "venue",
                "id": "ZFr9jZee1e",
                "test": false,
                "locale": "en-us",
                "postalCode": "70113",
                "timezone": "America/Chicago",
                "city": {
                    "name": "New Orleans"
                },
                "state": {
                    "name": "Louisiana",
                    "stateCode": "LA"
                },
                "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                },
                "address": {
                    "line1": "1501 Dave Dixon Drive"
                },
                "location": {
                    "longitude": "-90.082802",
                    "latitude": "29.9429"
                },
                "dmas": [
                    {
                        "id": 344
                    }
                ],
                "upcomingEvents": {
                    "tmr": 31,
                    "ticketmaster": 24,
                    "_total": 55,
                    "_filtered": 0
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/venues/ZFr9jZee1e?locale=en-us"
                    }
                }
            }
        ],
        "attractions": [
            {
                "name": "New Orleans Pelicans",
                "type": "attraction",
                "id": "K8vZ9171oaV",
                "test": false,
                "url": "https://www.ticketmaster.com/new-orleans-pelicans-tickets/artist/805910",
                "locale": "en-us",
                "externalLinks": {
                    "twitter": [
                        {
                            "url": "http://www.twitter.com/pelicansnba"
                        }
                    ],
                    "wiki": [
                        {
                            "url": "https://en.wikipedia.org/wiki/New_Orleans_Pelicans"
                        }
                    ],
                    "facebook": [
                        {
                            "url": "http://www.facebook.com/pelicansnba"
                        }
                    ],
                    "instagram": [
                        {
                            "url": "http://www.instagram.com/pelicansnba"
                        }
                    ],
                    "homepage": [
                        {
                            "url": "https://www.nba.com/pelicans/"
                        }
                    ]
                },
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    }
                ],
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nE",
                            "name": "Sports"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAde",
                            "name": "Basketball"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vFJA",
                            "name": "NBA"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7l1",
                            "name": "Group"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA7d",
                            "name": "Team"
                        },
                        "family": false
                    }
                ],
                "upcomingEvents": {
                    "tmr": 38,
                    "ticketmaster": 29,
                    "_total": 67,
                    "_filtered": 0
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/attractions/K8vZ9171oaV?locale=en-us"
                    }
                }
            },
            {
                "name": "Los Angeles Lakers",
                "type": "attraction",
                "id": "K8vZ91718T0",
                "test": false,
                "url": "https://www.ticketmaster.com/los-angeles-lakers-tickets/artist/805962",
                "locale": "en-us",
                "externalLinks": {
                    "twitter": [
                        {
                            "url": "https://twitter.com/lakers"
                        }
                    ],
                    "wiki": [
                        {
                            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Lakers"
                        }
                    ],
                    "facebook": [
                        {
                            "url": "https://www.facebook.com/lakers"
                        }
                    ],
                    "instagram": [
                        {
                            "url": "https://www.instagram.com/lakers"
                        }
                    ],
                    "homepage": [
                        {
                            "url": "https://www.nba.com/lakers/"
                        }
                    ]
                },
                "aliases": [
                    "los angeles lakers",
                    "la lakers",
                    "laker",
                    "laker tickets",
                    "lakers tickets"
                ],
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nE",
                            "name": "Sports"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAde",
                            "name": "Basketball"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vFJA",
                            "name": "NBA"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7l1",
                            "name": "Group"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA7d",
                            "name": "Team"
                        },
                        "family": false
                    }
                ],
                "upcomingEvents": {
                    "tmr": 10,
                    "ticketmaster": 58,
                    "_total": 68,
                    "_filtered": 0
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/attractions/K8vZ91718T0?locale=en-us"
                    }
                }
            }
        ]
    }
}


export const getEventName = {
    "_embedded": {
        "events": [
            {
                "name": "Boston Celtics vs. Milwaukee Bucks",
                "type": "event",
                "id": "vvG17Z9sZCcI9K",
                "test": false,
                "url": "https://www.ticketmaster.com/boston-celtics-vs-milwaukee-bucks-boston-massachusetts-11-22-2023/event/01005F100EB685D3",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2023-08-17T19:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-11-23T01:30:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-11-22",
                        "localTime": "19:30:00",
                        "dateTime": "2023-11-23T00:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/New_York",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nE",
                            "name": "Sports"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAde",
                            "name": "Basketball"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vFJA",
                            "name": "NBA"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7l1",
                            "name": "Group"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA7d",
                            "name": "Team"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "695",
                    "name": "NBA REGULAR SEASON",
                    "description": "NBA REGULAR SEASON / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "695",
                        "name": "NBA REGULAR SEASON",
                        "description": "NBA REGULAR SEASON / NTL / USA"
                    }
                ],
                "info": "Please adhere to the published ticket limits. Guests attending TD Garden events are advised that laptops, tablets, bags, backpacks, luggage, coolers, parcels, briefcases and like articles will be strictly prohibited from the facility. All guests may be subject to search of their person and/or possessions. Patrons with prohibited articles will be turned away and no storage or \"check-in area\" will be provided. Enforcement will be without exceptions. All events are subject to change.",
                "pleaseNote": "Please adhere to the published ticket limits. Guests attending TD Garden events are advised that laptops, tablets, bags, backpacks, luggage, coolers, parcels, briefcases and like articles will be strictly prohibited from the facility. All guests may be subject to search of their person and/or possessions. Patrons with prohibited articles will be turned away and no storage or \"check-in area\" will be provided. Enforcement will be without exceptions. All events are subject to change.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 184.5,
                        "max": 1795.5
                    }
                ],
                "products": [
                    {
                        "name": "TD Garden Event Parking North Station Garage - Celtics vs. Bucks",
                        "id": "vvG17Z9YTp7PY3",
                        "url": "https://www.ticketmaster.com/td-garden-event-parking-north-station-boston-massachusetts-11-22-2023/event/01005F0FD6125C12",
                        "type": "Parking",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/01005F100EB685D3/staticImage?type=png&systemId=HOST"
                },
                "accessibility": {
                    "ticketLimit": 2
                },
                "ticketLimit": {
                    "info": "There is an overall (5) five ticket limit for this event."
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    }
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG17Z9sZCcI9K?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ91718Xf?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ91718TV?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpa2gne?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "TD Garden",
                            "type": "venue",
                            "id": "KovZpa2gne",
                            "test": false,
                            "url": "https://www.ticketmaster.com/td-garden-tickets-boston/venue/8337",
                            "locale": "en-us",
                            "aliases": [
                                "td banknorth garden"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/21608v.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "postalCode": "02114",
                            "timezone": "America/New_York",
                            "city": {
                                "name": "Boston"
                            },
                            "state": {
                                "name": "Massachusetts",
                                "stateCode": "MA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "100 Legends Way"
                            },
                            "location": {
                                "longitude": "-71.060724",
                                "latitude": "42.365841"
                            },
                            "markets": [
                                {
                                    "name": "Boston",
                                    "id": "11"
                                },
                                {
                                    "name": "New England",
                                    "id": "33"
                                },
                                {
                                    "name": "All of US",
                                    "id": "51"
                                },
                                {
                                    "name": "Connecticut",
                                    "id": "124"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 200
                                },
                                {
                                    "id": 225
                                },
                                {
                                    "id": 235
                                },
                                {
                                    "id": 238
                                },
                                {
                                    "id": 296
                                },
                                {
                                    "id": 361
                                },
                                {
                                    "id": 363
                                },
                                {
                                    "id": 364
                                },
                                {
                                    "id": 392
                                }
                            ],
                            "social": {
                                "twitter": {
                                    "handle": "@tdgarden"
                                }
                            },
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "General Info Number:(617) 624-1000 Group Sales (only!): (617) 624-1805/1806 Bruins (617) 624-BEAR (Groups = 25+) Celtics (617) 523-3030 (Groups = 20+) Please do not contact Group Sales regarding sold out games!",
                                "openHoursDetail": "TD Garden - Boston | Tickets, Schedule, Seating Chart, Directions (ticketmaster.com) The box office will open 2 hours prior to an event and remain open until one hour after the event begins. Please note the TD Garden Box Office does not sell tickets at the public on sale. All tickets should be purchased via www.ticketmaster.com *Hours subject to change",
                                "acceptedPaymentDetail": "Cash; Check up to $100.00 w/Mass. Driver License; AMEX; Visa; MC; Discover; Diners Club",
                                "willCallDetail": "Pick up tickets starting 2 hours prior to event time. Customer must present the actual credit card used to place order and a photo I.D."
                            },
                            "parkingDetail": "Park under The TD Garden in the new garage or in one of the several lots around the building.",
                            "accessibleSeatingDetail": "This is an accessible venue.",
                            "generalInfo": {
                                "generalRule": "Alcohol Policy : To purchase alcoholic beverages, a patron must present a valid MA driver's license, MA liquor ID, passport or military ID, which indicates the patron to be a least 21 years of age (MA ID cards, duplicate licenses, expired licenses, damaged licenses and driver's licenses, which do not have photos, will not be accepted). Out of state licenses are acceptable only if the patron is at least 25 years of age and another form of identification (e.g., credit card) will be required if the patron is between 25 and 30 years of age. For out of country patrons, only a valid Passport will be accepted as proof of identification. No smoking is allowed in the building.",
                                "childRule": "Children under 2 free on adults lap for all events, Celtics, Bruins, family shows, and concerts. Some exceptions may apply."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 114,
                                "_total": 114,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpa2gne?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Boston Celtics",
                            "type": "attraction",
                            "id": "K8vZ91718Xf",
                            "test": false,
                            "url": "https://www.ticketmaster.com/boston-celtics-tickets/artist/805903",
                            "locale": "en-us",
                            "externalLinks": {
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/celtics"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/bostonceltics"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Boston_Celtics"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/celtics"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "https://www.nba.com/celtics/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nE",
                                        "name": "Sports"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAde",
                                        "name": "Basketball"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFJA",
                                        "name": "NBA"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7d",
                                        "name": "Team"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 5,
                                "ticketmaster": 65,
                                "_total": 70,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ91718Xf?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Milwaukee Bucks",
                            "type": "attraction",
                            "id": "K8vZ91718TV",
                            "test": false,
                            "url": "https://www.ticketmaster.com/milwaukee-bucks-tickets/artist/805969",
                            "locale": "en-us",
                            "externalLinks": {
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/bucks"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Milwaukee_Bucks"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/milwaukeebucks"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/bucks/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "https://www.nba.com/bucks/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nE",
                                        "name": "Sports"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAde",
                                        "name": "Basketball"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFJA",
                                        "name": "NBA"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7d",
                                        "name": "Team"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 7,
                                "ticketmaster": 94,
                                "_total": 101,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ91718TV?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    "_links": {
        "first": {
            "href": "/discovery/v2/events.json?keyword=celtics&page=0&size=1"
        },
        "self": {
            "href": "/discovery/v2/events.json?size=1&page=0&keyword=celtics"
        },
        "next": {
            "href": "/discovery/v2/events.json?keyword=celtics&page=1&size=1"
        },
        "last": {
            "href": "/discovery/v2/events.json?keyword=celtics&page=1683&size=1"
        }
    },
    "page": {
        "size": 1,
        "totalElements": 1684,
        "totalPages": 1684,
        "number": 0
    }
}