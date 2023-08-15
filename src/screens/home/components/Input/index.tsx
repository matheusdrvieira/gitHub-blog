import { useContext } from "react";
import { InputContainer } from "./style";
import { Context } from "../../../../contexts";

export function Input(props: any) {
    const { setSearch } = useContext(Context);

    return (
        <InputContainer>
            <div>
                <label htmlFor="search">Publicações</label>
                <span>{props.quantity} publicações</span>
            </div>
            <input
                type="text"
                id="search"
                placeholder="Buscar conteúdo"
                onKeyUp={(event: any) => {
                    event.target.value.length > 2 ? setTimeout(() => { setSearch(event.target.value) }, 1000) : null
                }}
            />
        </InputContainer>
    )
}