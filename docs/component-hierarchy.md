##Component Hierarchy

**AuthForm**
- AuthForm
- ErrorComponent

**HomeContainer**
- ResortsContainer
- EventsContainer
- EventDetailContainer
- ResortDetailContainer

**ResortsContainer**
- UserLocation
- ResortIndexItem

**EventsContainer**
- ResortBlurb
- EventIndexItem

**EventDetailContainer**
- EventInformation
- JoinEvent
- GoogleMap

**ResortDetailContainer**
- ResortInformation
- GoogleMap

**HostsContainer**
- UserLocation
- HostIndexItem

**BecomeHostContainer**
- ApplyButton
- DemoHostForm

**HostProfileContainer**
- HostPicture
- HostBio
- HostContact
- HostEventItem

**ApplyContainer**
- HostApplication

**EventCreationContainer**
- EventCreation form

**DashboardContainer**
- ProfilePic
- UserInformation
- Link to find events
- Upcoming/Attended Events

**AboutContainer**
- About

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/resorts" | "ResortsContainer" |
| "/resorts/:resortId" | "EventsContainer" |
| "/resorts/:resortId/event/:eventId" | "EventDetailContainer" |
| "/resorts/:resortId/resort" | "ResortDetailContainer" |
| "/hosts" | "HostsIndexContainer" |
| "/users/:id" | "UserProfileContainer" |
| "/hosts/new-event" | "EventCreationContainer" |
| "/apply" | "ApplyContainer" |
| "/dashboard" | "DashboardContainer" |
| "/about" | "AboutContainer" |
