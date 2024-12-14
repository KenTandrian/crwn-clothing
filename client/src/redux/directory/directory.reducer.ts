const INITIAL_STATE: DirectoryReducer = {
    sections: [
        {
            title: 'hats',
            imageUrl: '/crwn-clothing/images/hats.png',
            size: '',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: '/crwn-clothing/images/jackets.png',
            size: '',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: '/crwn-clothing/images/sneakers.png',
            size: '',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: '/crwn-clothing/images/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: '/crwn-clothing/images/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;