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
| "/home" | "ResortsContainer" |
| "/home/:resortId" | "EventsContainer" |
| "/home/:resortId/event/:eventId" | "EventDetailContainer" |
| "/home/:resortId/resort" | "ResortDetailContainer" |
| "/hosts" | "HostsContainer/BecomeHostContainer" |
| "/hosts/:hostId" | "HostProfileContainer" |
| "/hosts/new-event" | "EventCreationContainer" |
| "/hosts/apply" | "ApplyContainer" |
| "/dashboard" | "DashboardContainer" |
| "/about" | "AboutContainer" |
