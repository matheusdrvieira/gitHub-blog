import { ArrowSquareOut, Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { ProfileContainer } from "./style";
import { useEffect, useState } from "react";
import { GitHubClient } from "../../../../client/gitHubClient";
import { Link } from "react-router-dom";
import { ProfileProps } from "../../../../interfaces";

export function Profile() {
    const [user, setUser] = useState({} as ProfileProps);
    const client = new GitHubClient();

    useEffect(() => {
        async function fetchUserGitHub() {
            const response = await client.fetchGitHubUser();
            setUser(response)
        }

        fetchUserGitHub();
    }, [])

    const bio = user.bio ? user.bio : "Sem bio.";
    const company = user.company ? user.company : "Não especificado";
    return (
        <ProfileContainer>
            <img src={user.avatar_url} alt="imagem do perfil" />
            <div className="box">
                <div className="profileTitle">
                    <h2>{user.name}</h2>
                    <div>
                        <Link to={user.html_url}>
                            <button>
                                github
                                <ArrowSquareOut size={16} color="#3294F8" weight="bold" />
                            </button>
                        </Link>
                    </div>
                </div>
                <p>{bio}</p>
                <div className="linksProfile">
                    <div className="iconProfile">
                        <GithubLogo size={16} color="#3A536B" />
                        {user.login}
                    </div>
                    <div className="iconProfile">
                        <Buildings size={16} color="#3A536B" />
                        {company}
                    </div>
                    <div className="iconProfile">
                        <Users size={16} color="#3A536B" />
                        {user.followers} seguidores
                    </div>
                </div>
            </div>
        </ProfileContainer>
    )
}