import { HeaderContainer } from "./style";
import effect1 from "../../assets/effect1.svg"
import effect2 from "../../assets/effect2.svg"
import { Terminal } from "@phosphor-icons/react";

export function Header() {

    return (
        <HeaderContainer>
            <img src={effect1} alt="" />
            <div className="logo">
                <Terminal size={45} color="#3294F8" weight="bold" />
                <h1>GITHUB BLOG</h1>
            </div>
            <img src={effect2} alt="" />
        </HeaderContainer>
    )
}