import { render, screen } from "@testing-library/react";
import SingleCountry from "../SingleCountry";
import { act } from "react";

// here we are checking whether the image is properly loaded on browser or not
// to check whether the image is loaded correctly, first we need to find image, the image is coming from country as a prop, country is an object from countries array, where countries are from CountryContainer.js file
// to check if the image is loaded correctly, we need country data, so here we take the one country object, beacuse SingleCountry.js file recieves single country, as we map over countries array
describe("should check SingleCountry.js file", () => {

  it("should check whether the image is properly loaded correctly", () => {
    const country = {
      name: {
        common: "South Georgia",
      },
      flags: {
        png: "https://flagcdn.com/w320/gs.png",
      },
      population: 30,
      region: "Antarctic",
      capital: "King Edward Point",
    };
  
    act(() => {
      render(<SingleCountry country={country} />);
    })
  
    const text = screen.getByAltText("flagss");
    expect(text).toBeInTheDocument();
  });
  
  
  // here we test whether the region is correctly loaded or not
  it("should check whether the region is correctly loaded", () => {
    const country = {
      name: {
        common: "South Georgia",
      },
      flags: {
        png: "https://flagcdn.com/w320/gs.png",
      },
      population: 30,
      region: "Antarctic",
      capital: "King Edward Point",
    };
  
    render(<SingleCountry country={country} />)
  
   const region = screen.getByText("Region: Antarctic")
  
   expect(region).toBeInTheDocument()
  })

})

//it should check whether the capital is correctly loaded or not
it("should check if the capital is correctly loaded", () => {
  const country = {
    name: {
      common: "South Georgia",
    },
    flags: {
      png: "https://flagcdn.com/w320/gs.png",
    },
    population: 30,
    region: "Antarctic",
    capital: "King Edward Point",
  };
  render(<SingleCountry country={country} />)

 const capital =  screen.getByText("Capital: King Edward Point" )
 expect(capital).toBeInTheDocument()
})