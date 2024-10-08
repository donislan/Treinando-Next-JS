import Header from "../components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import { Container, Button } from "reactstrap";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="py-5 text-center">
          <h1 className="mt-5 display-1">
            O melhor jeito de comprar o que você ama
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et
            mollitia repellat facere iste culpa?
          </p>
          <Link href="/products">
            <Button className="px-4 pb-2">Conheça nossos Produtos!</Button>
          </Link>
        </Container>
      </main>
    </>
  );
};

export default Home;
