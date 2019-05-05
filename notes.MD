config.json
    - where we keep the featureFlags, api Data, etc we want for the store.
        - In a Continuous deploy env we'd deploy changes to this
    - To add a new api to the store
        1. open `src/store/config/config.js`
        2. in the json object in add a new branch in the api with the following properties
            - url - the base url of the endpoint
            - settings - an object - key/value pairs of settings for that api
        3. add your selectors for that api in a new folder in `src/store/config/selectors`

apiData
    - This is where we keep the data we receive from different APIs as well as the status of requests to those apis
    - Each endpoint should have its own folder that is named the same as its branch in the store which contains the following
        1. actions - for dispatching the request
        2. apiData.js - reducer for those requests
