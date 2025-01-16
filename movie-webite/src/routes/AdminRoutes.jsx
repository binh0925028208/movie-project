import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Categories from "../pages/admin/categories/Categories";
import Movie from "../pages/admin/media_management/Movie";
import Episode from "../pages/admin/media_management/Episode";
import Trailer from "../pages/admin/media_management/Trailer";
import Package from "../pages/admin/vip/Package";
import Plans from "../pages/admin/vip/Plans";
import Feature from "../pages/admin/vip/Feature";
import Actors from "../pages/admin/cast_crew/Actors";
import Authors from "../pages/admin/cast_crew/Authors";
import Characters from "../pages/admin/cast_crew/Characters";
import Likes from "../pages/admin/engagement_pages/Likes";
import WatchLists from "../pages/admin/engagement_pages/WatchLists";
import Comments from "../pages/admin/engagement_pages/Comments";
import UserLikes from "../pages/admin/users_pages/UserLikes";
import UserWatchLists from "../pages/admin/users_pages/UserWatchLists";
import UserComments from "../pages/admin/users_pages/UserComments";
import ProfileComments from "../pages/admin/profile/ProfileComments";
import ProfileLikes from "../pages/admin/profile/ProfileLikes";
import ProfileWatchLists from "../pages/admin/profile/ProfileWatchLists";

function AdminRoutes(props) {
  const routes = [
    { path: "/", element: <Dashboard /> },
    { path: "/categories", element: <Categories /> },
    { path: "/media_management/movie", element: <Movie /> },
    { path: "/media_management/episode", element: <Episode /> },
    { path: "/media_management/trailer", element: <Trailer /> },
    { path: "/vip/package", element: <Package /> },
    { path: "/vip/feature", element: <Feature /> },
    { path: "/vip/plans", element: <Plans /> },
    { path: "/cast_crew/authors", element: <Authors /> },
    { path: "/cast_crew/characters", element: <Characters /> },
    { path: "/cast_crew/actors", element: <Actors /> },
    { path: "/engagement_pages/likes", element: <Likes /> },
    { path: "/engagement_pages/watchLists", element: <WatchLists /> },
    { path: "/engagement_pages/comments", element: <Comments /> },
    { path: "/users_pages/likes", element: <UserLikes /> },
    { path: "/users_pages/watchLists", element: <UserWatchLists /> },
    { path: "/users_pages/comments", element: <UserComments /> },
    { path: "/profile/likes", element: <ProfileLikes /> },
    { path: "/profile/watchLists", element: <ProfileWatchLists /> },
    { path: "/profile/comments", element: <ProfileComments /> },
  ];
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default AdminRoutes;
