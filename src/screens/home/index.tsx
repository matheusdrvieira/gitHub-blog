import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "./components/Input";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { Container, Box, Section } from "./style";
import { Context } from "../../contexts";
import { GitHubClient } from "../../client/gitHubClient";

export function Home() {
  const { search } = useContext(Context);
  const [issues, setIssues] = useState([] as any);
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
        <Input quantity={issues.length} />
        <Section>
          {issues.map((issue: any) => {
            return (
              <Post
                key={issue.id}
                data={issue}
              />
            )
          })}
        </Section>
      </Box>
    </Container >
  )
}