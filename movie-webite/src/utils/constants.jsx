import { FaImages, FaStar, FaUserFriends, FaComment } from "react-icons/fa";

export const menu = [
  {
    id: 1,
    title: "Dashboard",
    icon: <FaImages />,
    items: [{ id: 1, path: "/" }],
  },
  {
    id: 2,
    title: "Categories",
    icon: <FaImages />,
    items: [{ id: 1, title: "categories", path: "/categories" }],
  },
  {
    id: 3,
    title: "Media Management",
    icon: <FaImages />,
    items: [
      { id: 1, title: "Movie", path: "/media_management/movie" },
      { id: 2, title: "Episode", path: "/media_management/episode" },
      { id: 3, title: "Trailer", path: "/media_management/trailer" },
    ],
  },
  {
    id: 4,
    title: "Vip",
    icon: <FaStar />,
    items: [
      { id: 1, title: "Package", path: "/vip/package" },
      { id: 2, title: "Feature", path: "/vip/feature" },
      { id: 3, title: "Plans", path: "/vip/plans" },
    ],
  },
  {
    id: 5,
    title: "Cast & Crew",
    icon: <FaUserFriends />,
    items: [
      { id: 1, title: "Author", path: "/cast_crew/author" },
      { id: 2, title: "Character", path: "/cast_crew/character" },
      { id: 3, title: "Actor", path: "/cast_crew/actor" },
    ],
  },
  {
    id: 6,
    title: "Engagement Pages",
    icon: <FaComment />,
    items: [
      { id: 1, title: "Likes", path: "/engagement_pages/likes" },
      { id: 2, title: "WatchLists", path: "/engagement_pages/watchLists" },
      { id: 3, title: "Comment", path: "/engagement_pages/comments" },
    ],
  },
  {
    id: 7,
    title: "User Pages",
    icon: <FaComment />,
    items: [
      { id: 1, title: "Likes", path: "/users_pages/likes" },
      { id: 2, title: "WatchLists", path: "/users_pages/watchLists" },
      { id: 3, title: "Comment", path: "/users_pages/comment" },
    ],
  },
  {
    id: 8,
    title: "Profile",
    icon: <FaComment />,
    items: [
      { id: 1, title: "Likes", path: "/profile/likes" },
      { id: 2, title: "WatchLists", path: "/profile/watchLists" },
      { id: 3, title: "Comment", path: "/profile/comment" },
    ],
  },
];

export const categories = [
  { type: "Action", quantity: 120 },
  { type: "Comedy", quantity: 98 },
  { type: "Drama", quantity: 135 },
  { type: "Horror", quantity: 67 },
  { type: "Romance", quantity: 83 },
  { type: "Sci-Fi", quantity: 54 },
  { type: "Fantasy", quantity: 45 },
  { type: "Documentary", quantity: 22 },
];
export const updateCategories = (updatedCategory) => {
  categories = categories.map((cat) =>
    cat.id === updatedCategory.id ? updatedCategory : cat
  );
};
