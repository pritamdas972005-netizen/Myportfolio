import { Home, User, FolderKanban, FileText, Phone } from "lucide-react";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <Home size={20} />,
  },
  {
    title: "About",
    path: "/about",
    icon: <User size={20} />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FolderKanban size={20} />,
  },
  {
    title: "Blogs",
    path: "/blogs",
    icon: <FileText size={20} />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Phone size={20} />,
  },
];

