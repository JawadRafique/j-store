import { Wrapper } from "./App.styles";
import { Grid } from "@material-ui/core";
import { Item } from "./components/Item/Item";
import { useFetchProductsQuery } from "./features/products/productSlice";

const App = () => {
    const { data, isLoading, error, isSuccess } = useFetchProductsQuery();

    isSuccess && localStorage.setItem("products", JSON.stringify(data));
    if (isLoading) return <h3>Loading</h3>;
    if (error) return <h3>Something Went Wrong</h3>;
    console.log(data);
    return (
        <Wrapper>
            <Grid container spacing={3}>
                {data?.map((item) => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item item={item} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default App;
