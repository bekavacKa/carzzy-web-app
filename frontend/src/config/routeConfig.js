
const routeConfig ={
    HOME: {
        name: 'Home',
        url: '/'
    },
    SHOP: {
        name: 'Shop',
        url: '/shop'
    },
    ABOUT_US: {
        name: 'About Us',
        url: '/about-us'
    },
    // SHOP_CATEGORY: {
    //     name: 'Shop Category',
    //     url: '/shop/category/:catName',
    //     completeUrl: catName => `/shop/category/${catName}`
    // },
    SHOP_SINGLE_PRODUCT: {
        name: 'Single product',
        url: '/shop/product/:productId',
        completeUrl: productId => `/shop/product/${productId}`
    },
    CONTACT: {
        name: 'Contact US',
        url: '/contact'
    },
    SIGN_IN: {
        name: 'Sign In',
        url: '/auth'
    },
    USER_ACTIVATE: {
        name: 'activate user',
        url: '/user-activate/:id',
        completeUrl: id => `/user-activate/${id}`
    },
    USER_ACCOUNT : {
        name: 'user acount',
        url : '/user-account/:userId',
        completeUrl : userId => `/user-account/${userId}`
    },
    ORDER : {
        url: '/order'
    },
    DASHBOARD : {
        url: '/dashboard'
    },
    ADMIN_USERS : {
        url: 'all-users'
    },
    ADMIN_PRODUCTS : {
        url: 'all-products'
    },
    ADMIN_SUBS : {
        url: 'all-subs'
    },
    ADMIN_EMAILS : {
        url: 'all-emails'
    },
    ADMIN_STATS : {
        url: 'stats'
    },
}

export default routeConfig;