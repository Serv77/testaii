/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { BeforeYouVisit } from "./pages/BeforeYouVisit";
import { Services } from "./pages/Services";
import { FAQ } from "./pages/FAQ";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="before-you-visit" element={<BeforeYouVisit />} />
        <Route path="services" element={<Services />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}
