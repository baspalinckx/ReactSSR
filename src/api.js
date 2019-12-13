import fetch from "isomorphic-fetch";

export function fetchPhotos( ) {
    return fetch( "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=QTFOQRpERmPDTRcs5QjvaBVXYPChccfWBmOeobJU" )
        .then( res => res.json( ) )
        .then( res => res.photos);
}
