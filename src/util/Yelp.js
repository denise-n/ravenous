const apiKey = '7SRpAAVFhCtn9_enL5O8rXLr1JpYMSVaL6SevnEQvJSWDnaaPd8I3sko7MR2Rfe7oQ8p33u9o4BgGf9rmWSF5Q8pB2bZHCek7XgGPkeECgdM2oMrPI9W2kBXuqd6XXYx'
const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                'Authorization' : `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    
    }
}

export default Yelp
