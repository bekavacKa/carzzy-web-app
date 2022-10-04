import React from "react";
import { FaBuffer, FaMailBulk, FaProductHunt, FaUsersCog, FaWater } from 'react-icons/fa';

export const ADMIN_SIDEBAR_CONFIG = [
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
        name : "emails",
        url : "all-emails",
        icon : <FaMailBulk/>
    },
    {
        name : "stats",
        url : "stats",
        icon : <FaWater/>
    }
]