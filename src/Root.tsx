import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import { HomePage } from "./pages/HomePage";
import { App } from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PhonesPage } from "./pages/PhonePage";
import { DetailsPage } from "./pages/DetailsPage";
import { TabletsPage } from "./pages/TabletPage";
import { AccessoriesPage } from "./pages/AccessoriesPage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { CardPage } from "./pages/CardPage";

export const Root = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path=":productId" element={<DetailsPage />} />

            <Route path="phones">
              <Route index element={<PhonesPage />} />
              <Route path=":productId" element={<DetailsPage />} />
            </Route>

            <Route path="tablets">
              <Route index element={<TabletsPage />} />
              <Route path=":productId" element={<DetailsPage />} />
            </Route>

            <Route path="accessories">
              <Route index element={<AccessoriesPage />} />
              <Route path=":productId" element={<DetailsPage />} />
            </Route>

            <Route path="favourites">
              <Route index element={<FavouritesPage />} />
              <Route path=":productId" element={<DetailsPage />} />
            </Route>

            <Route path="card" element={<CardPage />} />

            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  );
}