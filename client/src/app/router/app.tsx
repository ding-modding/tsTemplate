import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App : FunctionComponent = () => {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<div/>}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}
