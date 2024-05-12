import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const Root = () => {
  return (
    <HashRouter>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />

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

              <Route path="cart" element={<CardPage />} />

              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ReduxProvider>
    </HashRouter>
  );
}