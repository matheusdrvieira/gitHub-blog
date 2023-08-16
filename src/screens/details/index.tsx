import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { Container, Title, Box, Content } from "./style";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GitHubClient } from "../../client/gitHubClient";
import { formatDate } from "../../utils/dateUltils";
import { IssueProps } from "../../interfaces";

export function Details() {
  const [issue, setIssue] = useState({} as IssueProps);
  const { id } = useParams();
  const client = new GitHubClient();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchIssuesById() {
      if (id) {
        const response = await client.fetchIssueById(id)
        setIssue(response)
      }
    }

    fetchIssuesById()
  }, [id])

  return (
    <>
      {Object.keys(issue).length ?
        <Container>
          <Header />
          <Box>
            <Title>
              <div className="headerButtons">
                <button onClick={() => navigate(-1)}><CaretLeft size={16} /> voltar</button>
                <Link to={issue.html_url} target="_blank"><button>ver no github <ArrowSquareOut size={16} color="#3294F8" weight="bold" /></button></Link>
              </div>
              <h1>{issue.title}</h1>
              <div className="footerDetails">
                <div className="iconProfile">
                  <GithubLogo size={16} color="#3A536B" />
                  {issue.user ? issue.user.login : null}
                </div>
                <div className="iconProfile">
                  <CalendarBlank size={16} color="#3A536B" />
                  {formatDate(issue.updated_at)}
                </div>
                <div className="iconProfile">
                  <ChatCircle size={16} weight="fill" color="#3A536B" />
                  {issue.comments} comentários
                </div>
              </div>
            </Title>
            <Content>{issue.body}</Content>
          </Box>
        </Container > : null}
    </>
  )
}