import React from "react";

function RandomSpot() {
    const spot = ["mx-16 md:mx-48 text-left", "mx-16 md:mx-48 text-right", "mx-32 md:mx-64 text-left", "mx-32 md:mx-64 text-right", "text-center"]
    const spotEnd = " my-4 laptop:text-2xl md:text-2xl"
    let randIndex = Math.floor(Math.random()*(spot.length));
    let spotBoth = spot[randIndex] + spotEnd;
    return spotBoth
}

export default RandomSpot