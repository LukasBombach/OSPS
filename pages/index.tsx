import React, { Component } from "react";
import Head from "next/head";
import Konva from "konva";
import { Stage, Layer, Rect, Text } from "react-konva";

export default class Home extends Component {
  state = {
    stageScale: 1,
    stageX: 0,
    stageY: 0
  };

  handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const scaleBy = 1.1;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    this.setState({
      stageScale: newScale,
      stageX:
        -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
        -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    });
  };

  render() {
    return (
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
        <Stage
          width={800}
          height={600}
          style={{ border: "1px solid black" }}
          onWheel={this.handleWheel}
          scaleX={this.state.stageScale}
          scaleY={this.state.stageScale}
          x={this.state.stageX}
          y={this.state.stageY}
          draggable={true}
        >
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
  }
}
