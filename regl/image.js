const regl = require("regl")();
const glslify = require("glslify");

var image = new Image();
image.src = "./assets/grays.jpg";
image.onload = function() {
  var imageTexture = regl.texture(image);
  drawImage({
    image: imageTexture
  });
};

const drawImage = regl({
  frag: glslify(`
    precision mediump float;

    #pragma glslify: aastep = require(glsl-aastep)

    uniform sampler2D texture;
    varying vec2 uv;

    void main () {
      float sdf = texture2D(texture, uv).a;
      vec4 color;
      vec4 tex = texture2D(texture, uv);
      if (tex.x < 0.1) {
        color = vec4(vec3(0.), 1.0);
      } else {
        color = vec4(vec3(1.), 1.);
      }
      gl_FragColor = color;
    }
  `),

  vert: glslify(`
    precision mediump float;
    attribute vec2 position;
    varying vec2 uv;
    void main () {
      uv = position;
      gl_Position = vec4(1.0 - 2. * position, 0., 1.);
    }
  `),

  attributes: {
    position: [-2, 0, 0, -2, 2, 2]
  },

  uniforms: {
    texture: regl.prop("image")
  },

  count: 3
});
