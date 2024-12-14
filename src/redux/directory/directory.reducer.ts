const INITIAL_STATE: DirectoryReducer = {
    sections: [
        {
            title: 'hats',
            imageUrl: '/images/hats.png',
            size: '',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: '/images/jackets.png',
            size: '',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: '/images/sneakers.png',
            size: '',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: '/images/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: '/images/men.png',
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