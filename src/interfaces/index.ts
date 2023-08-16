export interface IssueProps {
    html_url: string;
    title: string;
    updated_at: string;
    comments: string;
    body: string;
    user: {
        login: string;
    }
}

export interface PostProps {
    title: string;
    updated_at: string;
    number: number;
    body: string;
}

export interface ProfileProps {
    bio: string
    company: string
    avatar_url: string
    name: string
    html_url: string
    login: string
    followers: string
}