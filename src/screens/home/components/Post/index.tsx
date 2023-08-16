import { PostContainer } from "./style";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../utils/dateUltils";
import { PostProps } from "../../../../interfaces";

export function Post(props: { data: PostProps }) {

    return (
        <Link to={`/details/${props.data.number}`}>
            <PostContainer>
                <div>
                    <h1>{props.data.title}</h1>
                    <span>{formatDate(props.data.updated_at)}</span>
                </div>
                <p>{props.data.body}</p>
            </PostContainer>
        </Link>
    )
}