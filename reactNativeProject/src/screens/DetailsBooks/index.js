import React, { Component } from "react";

export default class DeatailsBooks extends Component {
  render() {
    const image = navigation.getParam("Image", "NO-image");

    return <Image source={{ uri: image }} style={{ width: 40, height: 40 }} />;
  }
}
