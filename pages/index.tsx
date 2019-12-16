import React from "react";
import Head from "next/head";
import { Stage, Layer, Rect, Text } from "react-konva";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
    </div>
    <Stage width={800} height={600}>
      <Layer>
        <Text text="Some text on canvas" fontSize={15} />
        <Rect x={20} y={50} width={100} height={100} fill="red" />
      </Layer>
    </Stage>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
