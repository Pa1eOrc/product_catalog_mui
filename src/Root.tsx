import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import { HomePage } from "./pages/HomePage";
import { App } from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Root = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />

            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  );
}