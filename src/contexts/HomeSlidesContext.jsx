import { createContext } from "react";

export const homeSlidesContext = createContext()

export const HomeSlidesContext = ({children}) => {
    const homeSlides = [
    {
      id: 1,
      src: "./home-slide.png",
    },
    {
      id: 2,
      src: "./home-slide.png",
    },
    {
      id: 3,
      src: "./home-slide.png",
    },
    {
      id: 4,
      src: "./home-slide.png",
    }
  ]
    return (
        <>
            <homeSlidesContext.Provider value={{homeSlides}}>
                {children}
            </homeSlidesContext.Provider>    
        </>
    )
}