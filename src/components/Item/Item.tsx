import { ProductType } from "../../features/products/productSlice";
import { Wrapper } from "./Item.styles";

type Props = {
    item: ProductType;
};

export const Item: React.FC<Props> = ({ item }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} width="250px" height="250px" />
        <div>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>
                <b>Rs {item.price}</b>
            </p>
        </div>
    </Wrapper>
);
