const regl = require("regl")();

const drawTriangle = regl({
  // Fragment shader
  frag: `
    precision mediump float;
    uniform vec4 color;
    void main () {
      gl_FragColor = color;
    }
  `,

  // Vertex shader
  vert: `
    precision mediump float;
    attribute vec2 position;
    void main () {
      gl_Position = vec4(position, 0, 1);
    }
  `,

  // Attributes
  attributes: {
    // position: [
    //   [-1, 0],
    //   [0, -1],
    //   [1, 1]
    // ]
    position: function(context, props) {
      return [
        [-1 * Math.cos(context.tick / 100), 0],
        [Math.sin(context.tick / 100), -1],
        [Math.sin(context.tick / 100), 1]
      ];
    }
  },

  // Uniforms
  uniforms: {
    // color: [1, 0, 0, 1]
    // color: function(context, props) {
    //   return props.color;
    // }
    color: regl.prop("color")
  },

  // Vertex count
  count: 3
});

regl.frame(function(context) {
  drawTriangle({
    color: [0.208, 0.304, 1.0, 1.0]
  });
});
