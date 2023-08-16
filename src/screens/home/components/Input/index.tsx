import { InputHTMLAttributes } from "react";
import { InputContainer } from "./style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    quantity: number;
    setSearch: (value: string) => void;
}

export function Input(props: InputProps) {

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
                    setTimeout(() => { props.setSearch(event.target.value) }, 1000)
                }}
            />
        </InputContainer>
    )
}