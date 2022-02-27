import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
    query TournamentsByVideogame($perPage: Int!, $videogameId: ID!) {
    tournaments(query: {
        perPage: $perPage
        page: 1
        sortBy: "startAt asc"
        filter: {
        past: false
        upcoming: true
        countryCode:"US"
        videogameIds: [
            $videogameId
        ]
        }
    }) {
        nodes {
        id
        name
        slug
        numAttendees
        venueName
        countryCode
        addrState
        city
        startAt
        endAt
        images {
            id
            url
        }
        }
    }
    }
`