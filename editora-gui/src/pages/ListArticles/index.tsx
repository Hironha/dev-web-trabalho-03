import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import Api from "api";
import { useIsMounted } from "hooks/useIsMounted";

import classes from "./styles.module.css";

import type { Article } from "utility/types/models/Article";

const ListArticles = (): JSX.Element => {
  const isMounted = useIsMounted();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await Api.get<Article[]>("/articles");
        if (!isMounted.current) return;

        setArticles(response.data);
      } catch (err) {
        if (!isMounted.current) return;
        console.log(err);
      }
    }

    fetchArticles();
  }, [isMounted]);

  return (
    <Table responsive className={classes["list-container"]}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Resumo</th>
          <th>Publicado</th>
          <th>Data Publicação</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article.uuid}>
            <td>{article.id}</td>
            <td>{article.title}</td>
            <td>{article.author}</td>
            <td>{article.summary || "-"}</td>
            <td>{article.published ? "Publicado" : "Não Publicado"}</td>
            <td>{article.published_at}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListArticles;
