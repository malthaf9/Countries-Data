import { render, screen, waitFor } from "@testing-library/react"
import CountryContainer from "../CountryContainer"
import { json } from "react-router-dom"
import mock_countries from '../mocks_data/CountriesMockData'
import { act } from "react"

// 1. here we want to test whether the data from api is correctly loaded or not.
// 2. to check whether that data from api is correctly loaded we need to mock the fetch request i.e. we need to write fake api call, because we are not able to test directly on browser, instead of test application browser directly instead it gives js-dom environment which is browser like environment at where we can test our application
// 3. in js-dom environment we have make a fake request call to get the data from api
// 4. to make an api call we use fetch() function, but fetch() is not javascript function it is a browser function or method, which is used to make an api calls
// 5. as we already know we cannot directly test the application browser directly, similarly fetch() is a browser method we cannot use directly.
// 6. to make fake api call using fetch() we need to get fetch() from global object, browser has global object in which we have all methos and properties to access
// 7. thats why we wrriten 'global.fetch = jest.fn()' that means we are using fetch() from global object inside jest
// 8. jest.fn() - it takes callback function
// 9. we know when we make an api call it returns a promise, promise means object - in which initially it has empty object like this { data: undefined } initially it has undefined, instead of data field we can write anything we want, and now after some time it returns data from api,  as we know promise is a way to handle asynchonous functions
// 10. as we know js runs its code synchronously and when it has async code the code moves web api model and then callback queue and then by eventloop it moves to stack 
// 11. we know we return data in json format like 'const data = dat.json()' thats why we write 'return Promise.resolve({json})'
// 12. return Promise.resolve({json}) - here in Promise the data from api is returned and resolve means succesfully fetch data from api, reject means we are unable to fetch data from api
// 13. json() - json also a function which returns the data like 'json : { () => return Promise.reolve(data)}'
// 14. like this below code works

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mock_countries)
        }
    })
})

console.log(mock_countries)

it('should check whether search functionality works properly or not', async () => {

    //const query = "South Georgia";
    

    // whenever we using fetch functions or state we need to render our component in act function act()
    //  Render the component inside act() because of the async fetch function
   await act(async () => {
        render(<CountryContainer query=""  />)
    })

    // Wait for the data to be loaded and the component to render the results
  await waitFor(() => {
    // Ensure that all country cards are initially present
    mock_countries.forEach((country) => {
      const countryName = screen.getByText(country.name.common);
      expect(countryName).toBeInTheDocument();
    });
  });

  // Find the search input and simulate typing a search query
  const searchInput = screen.getByPlaceholderText("Search for a country"); // Adjust if your placeholder text is different
  fireEvent.change(searchInput, { target: { value: 'South Georgia' } });

  await waitFor(() => {
    // Ensure that the country card for "South Georgia" is displayed
    const countryName = screen.getByText('South Georgia');
    expect(countryName).toBeInTheDocument();

    // Ensure that country cards not matching the search query are not displayed
    mock_countries.forEach((country) => {
      if (country.name.common !== 'South Georgia') {
        expect(screen.queryByText(country.name.common)).not.toBeInTheDocument();
      }
    });
  });

})