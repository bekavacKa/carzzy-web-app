import React from "react";
import {FaUserEdit, FaProductHunt, FaUsersCog, FaWater, FaBlogger, FaEnvelopeOpenText, FaSpeakap, FaRegImages } from 'react-icons/fa';

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
    {
        name : "blogs",
        url : "all-blogs",
        icon : <FaBlogger/>
    },
    {
        name : "impressions",
        url : "all-impressions",
        icon : <FaEnvelopeOpenText />
    },
    {
        name : "sponsors",
        url : "all-sponsors",
        icon : <FaSpeakap />
    },
    {
        name : "banners",
        url : "all-banners",
        icon : <FaRegImages />
    },
    // {
    //     name : "emails",
    //     url : "all-emails",
    //     icon : <FaMailBulk/>
    // },
]