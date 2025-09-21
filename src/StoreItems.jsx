import { useEffect, useState } from "react"
import { getProducts } from "./services/service";

const StoreItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts().then((products) => {
            setItems(products);
        });
    }, []);


    useEffect(() => {
        console.log("Items changed:", items);
    }, [items]);
    return (
        <></>

    )
}

export default StoreItems