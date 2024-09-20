import { GetServerSideProps, NextPage } from "next";
import { Container, Row, Col } from "reactstrap";
import { useState, useEffect, ReactNode } from "react";

interface ApiResponse {
  name: string;
  timestamp: Date;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const serverSideData: ApiResponse = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/hello`
  ).then((res) => res.json());
  return {
    props: {
      serverSideData: serverSideData,
    },
  };
};

const Dynamic: NextPage = (props: {
  children?: ReactNode;
  serverSideData?: ApiResponse;
}) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("./api/hello").then((res) => res.json());
    setClientSideData(data);
  };

  return (
    <Container>
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>
      <Row>
        <Col>
          <h3>Gerador no servidor:</h3>
          <h2>
            {props.serverSideData?.timestamp &&
              new Date(props.serverSideData.timestamp).toLocaleString()}
          </h2>
        </Col>
        <Col>
          <h3>Gerador no cliente:</h3>
          <h2>
            {clientSideData?.timestamp &&
              new Date(clientSideData.timestamp).toLocaleString()}
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Dynamic;
