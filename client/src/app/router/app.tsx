import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Test } from 'src/pages/test';

export const App : FunctionComponent = () => {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Test/>}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}
