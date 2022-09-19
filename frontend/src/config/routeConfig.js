
const routeConfig ={
    HOME: {
        name: 'Home',
        url: '/'
    },
    SHOP: {
        name: 'Shop',
        url: '/shop'
    },
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
}

export default routeConfig;