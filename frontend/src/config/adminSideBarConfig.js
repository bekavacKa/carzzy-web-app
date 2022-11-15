import React from "react";
import {FaUserEdit, FaProductHunt, FaUsersCog, FaWater } from 'react-icons/fa';

export const ADMIN_SIDEBAR_CONFIG = [
    {
        name : "stats",
        url : "",
        icon : <FaWater/>
    },
    {
        name : "users",
        url : "all-users",
        icon : <FaUsersCog/>
    },
    {
        name : "products",
        url : "all-products",
        icon : <FaProductHunt/>
    },
    {
        name : "subscriptions",
        url : "all-subs",
        icon : <FaUserEdit/>
    },
    // {
    //     name : "emails",
    //     url : "all-emails",
    //     icon : <FaMailBulk/>
    // },
]