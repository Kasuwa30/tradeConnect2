import Link from "next/link";

const navigations = [
  {
    component: Link,
    name: "Dashboard",
    to: "/dashboard/home",
    activeIcon: "/images/category.svg",
  },
  {
    component: Link,
    name: "Search Vendors",
    to: "/dashboard/search",
    activeIcon: "/images/people.svg",
  },
  {
    component: Link,
    name: "Messages",
    to: "/dashboard/settings",
    activeIcon: "/images/directbox-notif.svg",
  },
  {
    component: Link,
    name: "Subscription",
    to: "/dashboard/settings",
    activeIcon: "/images/wallet-money.svg",
  },
  {
    component: Link,
    name: "Transactions",
    to: "/dashboard/settings",
    activeIcon: "/images/gift.svg",
  },
  {
    component: Link,
    name: "Notification",
    to: "/dashboard/settings",
    activeIcon: "/images/notification.svg",
  },
  {
    component: Link,
    name: "Settings",
    to: "/dashboard/settings",
    activeIcon: "/images/setting-2.svg",
  },
];

export default navigations;
