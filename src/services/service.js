const STORAGE_KEY="products_cache";

export const getProducts = async () => {
    const cached=localStorage.getItem(STORAGE_KEY);
    if(cached){
        console.log("returning from cache");
        return JSON.parse(cached);
        
    }
    const response=await fetch('https://fakestoreapi.com/products')
     const data=await response.json();

     localStorage.setItem(STORAGE_KEY,JSON.stringify(data))

     return data;
};
