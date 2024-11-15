import Link from "next/link";

const Navigations = [
  {
    component: Link,
    name: "Dashboard",
    to: "/dashboard/home",
    activeIcon: "/images/category.svg",
    //inActiveIcon: <Icon id="inactive-dashboard-icon" />,
  },
  {
    component: Link,
    name: "Search Vendors",
    to: "/dashboard/profile",
    activeIcon: "/images/people.svg",
    // inActiveIcon: <Icon id="inactive-project-icon" />,
  },
  {
    component: Link,
    name: "Messages",
    to: "/dashboard/settings",
    activeIcon: "/images/directbox-notif.svg",
    // inActiveIcon: <Icon id="inactive-project-icon" />,
  },
  {
    component: Link,
    name: "Subscription",
    to: "/dashboard/settings",
    activeIcon: "/images/wallet-money.svg",
    // inActiveIcon: <Icon id="inactive-project-icon" />,
  },
  {
    component: Link,
    name: "Transactions",
    to: "/dashboard/settings",
    activeIcon: "/images/gift.svg",
    // inActiveIcon: <Icon id="inactive-project-icon" />,
  },
  {
    component: Link,
    name: "Notification",
    to: "/dashboard/settings",
    activeIcon: "/images/notification.svg",
    // inActiveIcon: <Icon id="inactive-project-icon" />,
  },
];

export default Navigations;
