#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
	vec2 st = gl_FragCoord.xy / u_resolution;
	vec2 mst = u_mouse / u_resolution;
	gl_FragColor = vec4(st.x, mst.y, mst.x, 1.);
}