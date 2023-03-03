export default function getInspirationalQuotesData() {
  return fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((dataResponse) => {
      return dataResponse;
    })
    .catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
      return [
        {
          text: "Technology is a useful servant but a dangerous master.",
          author: "Christian Lous Lange",
        },
      ];
    });
}

// //this used with the api call from "../api.js" would be a better way to separate out the code and make things much easier to read.
// useEffect(() => {
//   setIsLoading(true);
//   getInspirationalQuotesData()
//     .then((dataResponse) => {
//       setQuoteData(dataResponse);
//       generateNewQuote();
//       setIsLoading(false);
//     })
//     .catch((error) => {
//       console.log(error);
//       setIsLoading(false);
//     });
// }, []);
