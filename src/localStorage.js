const LOCAL_ITEMS = 'LOCAL_ITEMS';

export const updateLocalStorage = (itemsList) => {
    localStorage.setItem(LOCAL_ITEMS, JSON.stringify(itemsList));
}

export const getItemsList = () => (
    JSON.parse(localStorage.getItem(LOCAL_ITEMS)) || []
)