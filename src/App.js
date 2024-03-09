import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route,useNavigationType,useLocation, } from "react-router-dom";
import QnA_page from './Components/QnA_page';
import Home from './Components/Home';

  import BetadayzerovercelappByHtm from "./Components/BetadayzerovercelappByHtm.jsx";
  import { useEffect } from "react";
  import Login  from "./Components/Login"

function App() {
	// const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/QnA_page" element={<QnA_page />} />
					{/* <Route path="/" element={<BetadayzerovercelappByHtm />} />
      <Route path="/login" element={<Login/>}/> */}
				</Routes>
			</BrowserRouter>
		</div>

	);
}
export default App;