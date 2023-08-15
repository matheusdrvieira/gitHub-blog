import axios from "axios";

const AUTH_TOKEN = "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";
const GITHUB_USER = "matheusvieira14"
const REPOSITORY = "GitHub-Blog"
const BASE_URL = "https://api.github.com"

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