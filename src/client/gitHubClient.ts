import axios from "axios";

export class GitHubClient {
    async fetchIssues(search: string) {
        const response = await axios.get(`${process.env.BASE_URL}/search/issues?q=is:issue+${search}%20repo:${process.env.GITHUB_USER}/${process.env.REPOSITORY}`, {
            headers: {
                Authorization: `Bearer ${process.env.AUTH_TOKEN}`
            }
        });

        return response.data.items
    }

    async fetchIssueById(issueNumber: string) {
        const response = await axios.get(`https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.REPOSITORY}/issues/${issueNumber}`, {
            headers: {
                Authorization: `Bearer ${process.env.AUTH_TOKEN}`
            }
        })

        return response.data
    }

    async fetchGitHubUser() {
        const response = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USER}`, {
            headers: {
                Authorization: `Bearer ${process.env.AUTH_TOKEN}`
            }
        })
        return response.data
    }
}