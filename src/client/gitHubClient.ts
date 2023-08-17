import axios from "axios";

const AUTH_TOKEN = ""
const BASE_URL = "https://api.github.com"
const GITHUB_USER = "matheusvieira14"
const REPOSITORY = "GitHub-Blog"

export class GitHubClient {
    async fetchIssues(search: string) {
        const response = await axios.get(`${BASE_URL}/search/issues?q=is:issue+${search}%20repo:${GITHUB_USER}/${REPOSITORY}`, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`
            }
        });

        return response.data.items
    }

    async fetchIssueById(issueNumber: string) {
        const response = await axios.get(`https://api.github.com/repos/${GITHUB_USER}/${REPOSITORY}/issues/${issueNumber}`, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`
            }
        })

        return response.data
    }

    async fetchGitHubUser() {
        const response = await axios.get(`https://api.github.com/users/${GITHUB_USER}`, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`
            }
        })
        return response.data
    }
}