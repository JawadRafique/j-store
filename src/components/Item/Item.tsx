import { ProductType } from "../../features/products/productSlice";
import { Wrapper } from "./Item.styles";

type Props = {
    item: ProductType;
};

export const Item: React.FC<Props> = ({ item }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} width="250px" height="250px" />
        <div>{item.title}</div>
    </Wrapper>
);
