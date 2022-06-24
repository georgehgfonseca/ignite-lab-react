import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
    watchQuery:{
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
}
export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers: {'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYwMjY2MjIsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG8zZjVzZTBkYjgwMXo3YnZoeWgxbmwvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2IzODI1ZjQtZDgwMS00NjM5LWEyNzYtYWI1NDg5ZGQ1MTMxIiwianRpIjoiY2w0cm5ocnlrMWQ2YzAxejNmOTl0aGJhYSJ9.esqM4XXvoR8EnaiVwfrGxOl73f2VORMKGme6IPUyi0YGHMSWJtKLgPDP418gCz4l2EEnWEYoONaRSURhBdTHmkagK94JqBm5vqa4ZJdgyzt9zgiwwXw0KU7NoWKmnHOL-0hNkH30OIEghour2itfUWFI3dJEfyJ1Tn9hX1Tyxy5pojRGFpMZYpOL3IAQIWty-UD5MrR3DDH_wsT22hQdlt_qx-5qmWhSZEIeNxHRM8MVxJZzEbAACzTHfWBnVqvQNJ3gqFKaWISCau2qkCPRAXwiDNLEPSxa5t-HyCPO-dtIBscvBtTmyLJE8UIyeeK7lieZDwyuWGXD_CetpbouYtM58WLIU-2trls_SD-5tDaYtmhpQnNsLOJcTFeyjcLoQWQTwZbFkModjECWXO2SoQBMTKuecADgFBQWD4ZWUf1UyuE2xedd3yLmbwWOGmcK2ltti9ZhAq9E_20Sk8NU7XG_57Nu57NG_CV9mabAJtjVwgtd4MeTJyd3NAme_oo6rIr-1FO2QYAJqrI4NRVCc47j3R4z4d-Ik20G7KJhGrfXh7Eu4j-VRQndgKRQwbMfvBA13QynvOWYGQUBXK0G_ZTPY8jpcKi16oB4Bhp_UUeP9omDd3FCw2lUMt8WFFyOGmEobkCJgwHwszgyxfekW0IZIihOT23d_3WFoscQ4WA'},
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})