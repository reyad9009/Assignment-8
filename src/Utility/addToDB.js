import { toast } from "react-toastify";

const getStoredReadList = () => {
    // read-list
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;

    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // already exists. do not add it
        //console.log(id, 'already exists in the read list')
        toast.warn('All ready Exists')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // ideally trigger toast from the component
        toast.success('Add To Card success');
    }
}

const deleteFromStoredReadList = (id) => {
    const storedList = getStoredReadList(); // Get the current list from localStorage
    const updatedList = storedList.filter((itemId) => itemId !== id); // Remove the item by filtering it out
    localStorage.setItem('read-list', JSON.stringify(updatedList)); // Update localStorage with the new list
    console.log(`Item with id ${id} has been deleted from the read list.`);
};
const deleteFromStoredWishList = (id) => {
    const storedList = getStoredWishList(); // Get the current list from localStorage
    const updatedList = storedList.filter((itemId) => itemId !== id); // Remove the item by filtering it out
    localStorage.setItem('wish-list', JSON.stringify(updatedList)); // Update localStorage with the new list
    console.log(`Item with id ${id} has been deleted from the read list.`);
};


const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        // already exists. do not add it
       // console.log(id, 'already exists in the read list')
        toast.warn('All ready Exists')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast.success('Add To WishList success');
    }
}

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList, deleteFromStoredReadList,deleteFromStoredWishList }