import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Loader from "components/Loader";

import Api from "api";
import { useIsMounted } from "hooks/useIsMounted";

import classes from "./styles.module.css";

import type { Article } from "utility/types/models/Article";

type ArticlesState = {
  isLoading: boolean;
  items: Article[];
};

const ListArticles = (): JSX.Element => {
  const isMounted = useIsMounted();
  const [articles, setArticles] = useState<ArticlesState>({
    isLoading: true,
    items: [],
  });

  useEffect(() => {
    async function fetchArticles() {
      setArticles((prevState) => ({ ...prevState, isLoading: true }));

      try {
        const response = await Api.get<Article[]>("/articles");
        if (!isMounted.current) return;

        return setArticles({ isLoading: false, items: response.data });
      } catch (err) {
        if (!isMounted.current) return;
        console.log(err);
      }

      setArticles((prevState) => ({ ...prevState, isLoading: false }));
    }

    fetchArticles();
  }, [isMounted]);

  const deleteArticleHandler = (articleId: number) => {
    return async () => {
      try {
        await Api.put(`/articles/update/${articleId}`, {
          is_active: false,
        });

        if (!isMounted.current) return;

        setArticles((prevState) => ({
          ...prevState,
          items: prevState.items.filter((prevArt) => prevArt.id !== articleId),
        }));
      } catch (err) {
        console.log(err);
      }
    };
  };

  return (
    <>
      {articles.isLoading ? (
        <Loader />
      ) : (
        <Table responsive="sm" className={classes["list-container"]}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Publicado</th>
              <th>Data Publicação</th>
            </tr>
          </thead>
          <tbody>
            {articles.items.map((article) => (
              <tr key={article.uuid}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>{article.author}</td>
                <td>{article.published ? "Publicado" : "Não Publicado"}</td>
                <td>{article.published_at}</td>
                <td>
                  <DropdownButton title="Ações" align="start" size="sm">
                    <Dropdown.Item onClick={deleteArticleHandler(article.id)}>
                      Excluir
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ListArticles;
