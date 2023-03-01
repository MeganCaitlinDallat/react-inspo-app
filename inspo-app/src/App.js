import "./App.css";
import Layout from "./components/layout.js";
import QuoteGenerator from "./components/quoteGenerator.js";

//I included the MainPageApp as a means of making life easier if we wished to add more pages in the future.
function MainPageApp() {
  return <Layout children={<QuoteGenerator />}></Layout>;
}

function App() {
  return <MainPageApp />;
}
export default App;
