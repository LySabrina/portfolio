/**
 * Given a product's image file name, create a URL for that image file.
 * If using the path string in the <img> it will not work so we need to create a 
 * URL path for it to use. 
 * 
 * URL(url, base) - use base if the url is a relative path 
 * @param {string} img path of the img 
 */
export function getImageURL(img){
    // import meta - Node.js 
   return new URL(`../assets/images/${img}`, import.meta.url).href; 
}

