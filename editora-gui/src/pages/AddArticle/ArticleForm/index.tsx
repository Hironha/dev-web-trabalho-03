import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Api from "api";

// type ArticleFormValeus = {
//   published: boolean | null;
//   title: string;
//   author: string;
//   summary: string;
// };

const ArticleForm = (): JSX.Element => {
  useEffect(() => {
    let isMounted = true;

    const fetchArticles = async () => {
      try {
        const response = await Api.get("/articles");

        if (!isMounted) return;

        console.log(response.data);
      } catch (err) {
        if (!isMounted) return;
        console.log(err);
      }
    };

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  const publishedChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Teste</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Publicado" onChange={publishedChangeHandler} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ArticleForm;
