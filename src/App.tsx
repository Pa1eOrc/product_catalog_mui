import { Outlet, useLocation, useSearchParams } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import * as homePageActions from "./fuatures/HomePage/homePageSlice";
import * as searchParamsActions from "./fuatures/SearchParams/searchParamsSlice";

import "./App.scss";
import { getBreadcrumbsParams } from "./helperFunctions/otherFunctions";

export const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const sort = searchParams.get("sort") || "age";
  const perPage = searchParams.get("perPage") || "16";
  const query = searchParams.get("query") || "";

  useEffect(() => {
    dispatch(homePageActions.init("products"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchParamsActions.setPage({ page }));
  }, [dispatch, page, sort, perPage, query]);

  useEffect(() => {
    dispatch(searchParamsActions.setSort({ sort }));
  }, [dispatch, sort]);

  useEffect(() => {
    dispatch(searchParamsActions.setPerPage({ perPage }));
  }, [dispatch, perPage]);

  useEffect(() => {
    dispatch(searchParamsActions.setQuery({ query }));
  }, [dispatch, query]);

  useEffect(() => {
    const breadcrumbs = getBreadcrumbsParams(pathname);
    dispatch(searchParamsActions.setBreadcrumbs({ breadcrumbs }));
  }, [dispatch, pathname]);

  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
