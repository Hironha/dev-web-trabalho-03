import { useEffect, useCallback } from "react";
import { ListGroup } from "react-bootstrap";

import Api from "api";
import { useIsMounted } from "hooks/useIsMounted";

import classes from "./styles.module.css";

import type { AxiosError } from "axios";

type Article = {
  id_artigo: number;
  titulo: string;
  ano: number;
};

type ArticleListType = () => JSX.Element;

const DUMB_DATA: Article[] = [
  {
    id_artigo: 1,
    titulo: "Artigo 1",
    ano: 1920,
  },
  {
    id_artigo: 2,
    titulo: "Artigo 2",
    ano: 1930,
  },
  {
    id_artigo: 3,
    titulo: "Artigo 3",
    ano: 1940,
  },
];

const ListArticles: ArticleListType = () => {
  const isMounted = useIsMounted();
  // const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(async () => {
    try {
      const response = await Api.get<Article[]>("/artigos");
      if (!isMounted.current) return;

      console.log(response.data);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.message);
    }
  }, [isMounted]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <ListGroup className={classes["articles-list"]}>
      {DUMB_DATA.map((item) => (
        <ListGroup.Item>{item.titulo}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListArticles;
