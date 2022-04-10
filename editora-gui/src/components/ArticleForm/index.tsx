import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import Api from "api";

import classes from "./styles.module.css";

type ArticleFormValues = {
  title: string;
  author: string;
  summary: string;
  published_at?: Date;
  published: boolean;
};

const INIT_ARTICLE_VALUES: ArticleFormValues = {
  title: "",
  author: "",
  summary: "",
  published: true,
};


const ArticleForm = (): JSX.Element => {
  const [articleValues, setArticleValues] = useState<ArticleFormValues>(INIT_ARTICLE_VALUES);

  const publishedChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleValues((prevState) => ({ ...prevState, published: event.target.checked }));
  };

  const titleBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.trim();

    setArticleValues((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const authorBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.trim();

    setArticleValues((prevState) => ({ ...prevState, author: event.target.value }));
  };

  const summaryBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.trim();

    setArticleValues((prevState) => ({ ...prevState, summary: event.target.value }));
  };

  const publishedAtBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setArticleValues((prevState) => ({
      ...prevState,
      published_at: event.target.value ? new Date(event.target.value) : undefined,
    }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await Api.post("/articles/create", articleValues);
      alert("Artigo criado com sucesso");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form noValidate className={classes["form"]} onSubmit={submitHandler}>
      <Row className={`mb-3 ${classes["row"]}`}>
        <Form.Group as={Col} controlId="articleTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: O Pequeno Príncipe"
            onBlur={titleBlurHandler}
          />
          <Form.Control.Feedback type="invalid">Insira o título.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="articleAuthor">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Antoine de Saint-Exupéry"
            onBlur={authorBlurHandler}
          />
        </Form.Group>
      </Row>

      <Row className={`mb-3 ${classes["row"]} ${classes["date-input"]}`}>
        <Form.Group as={Col} controlId="articlePublished">
          <Form.Label>Data de Publicação</Form.Label>
          <Form.Control 
          type="date" 
          onBlur={publishedAtBlurHandler} />
        </Form.Group>
      </Row>

      <Row className={`mb-3 ${classes["row"]}`}>
        <Form.Group as={Col} controlId="articleAuthor">
          <Form.Label>Resumo</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" onBlur={summaryBlurHandler} />
        </Form.Group>
      </Row>

      <Row className={`mb-3 ${classes["row"]}`}>
        <Form.Group as={Col} controlId="articlePublished">
          <Form.Check
            type="checkbox"
            label="Publicado"
            onChange={publishedChangeHandler}
            checked={articleValues.published}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Criar artigo
      </Button>
    </Form>
  );
};

export default ArticleForm;
