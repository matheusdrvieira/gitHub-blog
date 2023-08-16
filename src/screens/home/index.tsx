import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "./components/Input";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { Container, Box, Section } from "./style";
import { GitHubClient } from "../../client/gitHubClient";
import { PostProps } from "../../interfaces";

export function Home() {
  const [search, setSearch] = useState("");
  const [issues, setIssues] = useState<PostProps[]>([]);
  const client = new GitHubClient();

  useEffect(() => {
    async function fetchIssues() {
      const response = await client.fetchIssues(search)
      if (response) {
        setIssues(response);
      }
    }

    fetchIssues()
  }, [search])

  return (
    <Container>
      <Header />
      <Box>
        <Profile />
        <Input quantity={issues.length} setSearch={setSearch} />
        <Section>
          {issues.map((issue: PostProps) => {
            return (
              <Post
                key={issue.number}
                data={issue}
              />
            )
          })}
        </Section>
      </Box>
    </Container >
  )
}