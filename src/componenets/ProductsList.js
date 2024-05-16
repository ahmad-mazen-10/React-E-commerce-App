import { useEffect , useState } from "react";
import Product from "./Product";

function ProductsList() {
const api_url = "https://fakestoreapi.com/products"; ;
const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);

    
    const getProducts = () => {
        fetch(api_url)
          .then((response) => response.json())
          .then((data) => setProducts(data));
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`)
          .then((response) => response.json())
          .then((data) => setCategories(data));
    }

    const getProductsInCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
          .then((response) => response.json())
            .then((data) => setProducts(data));
        
    }

    useEffect(() => {
        getProducts();
        getCategories();
    },[])


    return (
        <>
            <h2 className="text-center p-4"> Our Products </h2>
            <div className="container">
                  <button
                    onClick={() => {   getProducts();  }}
                    className="btn btn-info">
                    All
                 </button>
                    

                    {
                    categories.map((cat) => {
                        return (
                            <button
                                key={cat}
                                onClick={() => { getProductsInCategory(cat) }}
                                className="btn -btn-info">
                                {cat}
                            </button>
                        );
                    })}
                
                <div className="row">
                    { products.map((product) => {
                            return (
                                <div className="col-3" key={product.id}>
                                    <Product product={product}  showButton={true} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
 
export default ProductsList; 


