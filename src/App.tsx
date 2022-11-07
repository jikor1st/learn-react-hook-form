import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ExamplePage = lazy(() => import("./pages/Example"));
const SelectPage = lazy(() => import("./pages/Select"));
const ApplyValidationPage = lazy(() => import("./pages/ApplyValidation"));
const IntergratingExistingPage = lazy(
  () => import("./pages/IntergratingExisting")
);
const HandleErrorsPage = lazy(() => import("./pages/HandleErrors"));
const SchemaValidationPage = lazy(() => import("./pages/SchemaValidation"));
const ExampleUseWatchPage = lazy(() => import("./pages/ExampleUseWatch"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/apply_validation" element={<ApplyValidationPage />} />
        <Route
          path="/intergrating_exsiting"
          element={<IntergratingExistingPage />}
        />
        <Route path="/handle_erros" element={<HandleErrorsPage />} />
        <Route path="/schema_validation" element={<SchemaValidationPage />} />
        <Route path="/example_use_watch" element={<ExampleUseWatchPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
