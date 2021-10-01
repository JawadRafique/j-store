import { Wrapper } from "./App.styles";
import { Container, Grid } from "@material-ui/core";
import { Item } from "./components/Item/Item";
import { useFetchProductsQuery } from "./features/products/productSlice";
import {
    ItemType,
    useAddItemMutation,
    useFetchItemsQuery,
} from "./features/order/orderApiSlice";
import { useEffect, useState } from "react";

const App = () => {
    // const { data, isLoading, error, isSuccess } = useFetchProductsQuery();
    const [itemData] = useState<ItemType>({
        name: "second",
        price: 1202,
        category: "60e80183a9874942808d7aa2",
    });
    const { data, isLoading, error, isSuccess, refetch } = useFetchItemsQuery();

    const [addItem, addedItemData] = useAddItemMutation();
    isSuccess && localStorage.setItem("products", JSON.stringify(data));
    if (isLoading) return <h3>Loading</h3>;
    if (error) return <h3>Something Went Wrong</h3>;
    console.log(data);

    const AddButton = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log("Before Added Item", itemData);
        await addItem(itemData)
            .then(() => refetch())
            .catch((err) => console.log(err));
        console.log("After added Item", addedItemData.data);
    };
    return (
        <Container maxWidth="lg">
            <button onClick={AddButton}>Click to add</button>
            {/* <Grid container spacing={3}>
                {data?.map((item) => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item item={item} />
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={3}>
                {data?.map((item) => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item item={item} />
                    </Grid>
                ))}
            </Grid> */}
        </Container>
    );
};

export default App;
