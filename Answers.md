#Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?
*The state of the entire application is stored in a single store. It helps make the data flow cleaner and easier to understand, and helps debugging because the entire state is in one tree.  The redux store is kind of like a centralised database for the frontend.*

#Describe what an Action is/does.
*Actions are payloads of information that send data from the application to the store. They're simple javascript objects that contain a type and a payload, and tell teh reducers to make some sort of change to the state.*

#Describe what a Reducer is/does.
*Actions describe that something "happened", while reducers jobs specify how the applications state changes in response. It takes the past state and an action, and returns the next state.*

#What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
*HTTP = HyperText Transfer Protocol
CRUD = Create Read Update Delete

C R U D = PUT / POST | GET | PATCH | DELETE*
