export async function fetchGoogleReviews() {
  // Replace with actual Google Places API key and Place ID for Atlantis Dental Clinic
  const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';
  const PLACE_ID = 'YOUR_PLACE_ID';
  
  // Authentic cached reviews to display when the live API is unavailable
  const cachedData = {
    rating: 5.0,
    user_ratings_total: 231,
    reviews: [
      {
        author_name: "SREEKUMAR JANARDHANAN",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Excellent service and extremely knowledgeable. Both doctors Sanju and John were fantastic. They had relevant products available at the clinic. Would definitely visit again."
      },
      {
        author_name: "Sushant Sampat Sutar",
        rating: 5,
        relative_time_description: "4 months ago",
        text: "I filled GIC in my teeth.. Doctor is very polite and calm nature. Good Service.. Must visit for anyone for any teeth issue. Thank you Doctor Sanju..."
      },
      {
        author_name: "George Mathew",
        rating: 5,
        relative_time_description: "5 years ago",
        text: "Exemplary interiors and facilities. Honest, open straight forward professionals. Accurate and rich information on consults. Affordable. Well trained staff. Accepts payments in Cash and Contactless forms of payments such as credit cards and UPI. Visitors please be adviced to take the stairs to the Right side of the board. The establishment operates on the first floor."
      }
    ]
  };

  if (API_KEY === 'YOUR_GOOGLE_PLACES_API_KEY') {
    return {
      status: 'CACHED',
      ...cachedData
    };
  }

  try {
    // Note: To avoid CORS issues in production, this should ideally be routed through a backend proxy
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`);
    const data = await response.json();
    return {
      status: 'SUCCESS',
      rating: data.result?.rating,
      user_ratings_total: data.result?.user_ratings_total,
      reviews: data.result?.reviews || []
    };
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return {
      status: 'CACHED',
      ...cachedData
    };
  }
}
