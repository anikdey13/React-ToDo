
async function fetchData(){
    try{
    let res = await fetch("https://fakestoreapi.com/products");
    if(!res.ok) throw new Error("Failed to fetch");
    return await res.json();
    }catch(error){
        console.error("Error fetching data: ", error);
    }
}
export default fetchData;