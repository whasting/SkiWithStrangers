[Heroku link][heroku]
[Trello link][trello]

[heroku]: https://www.heroku.com/
[trello]: https://trello.com/b/bFP1uT8F/skiwithstrangers

## Minimum Viable Product
SkiWithStrangers is a web application inspired by TeaWithStrangers built using Ruby on Rails and React/Redux. Here are the MVPs:

- 1) Hosting on Heroku
- 2) Production README
- 3) New account creation, login, and guest/demo login
- 4) Choose Ski Resort
- 5) Host Event
- 6) Join Event for Selected Resort
- 7) Dashboard of joined events/hosted events

Bonus: Google Map API showing events based on location
Bonus: Suggestions based on event details and user profiles

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## DEVELOPMENT TIMELINE

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication.

### Phase 2: Hosts Model, API, and components (2 days)

**Objective:** Hosts can be created, viewed, edited, and destroyed using the API.

### Phase 3: Resorts Model, API, and components (2 days)

**Objective:** Resorts can be created, read, edited, and destroyed using the API.

### Phase 4: User Location and search sort (1 day)

**Objective:** User may input their location and resorts are sorted by distance from user location.

### Phase 5: Events Model, API, and components (2 days)

**Objective:** Events can be created, read, edited, and destroyed using the API, and joined using the interface.

### Phase 6: Create Dashboard (1 day)

**Objective:** Users can view their upcoming and attended events.

### Phase 7: Get Weather and Rating data via API for Resorts (1 day)

**Objective:** Resorts have weather and rating data when viewing.

### Bonus Features (TBD)

- [ ] Connect Google Maps API
- [ ] Event suggestions based on event details and user profiles
