#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec3 color = vec3(0.0);

	// Bottom left
	vec2 bl = step(vec2(0.1), st);
	float pct = bl.x * bl.y;

	// Top right
	vec2 tr = smoothstep(vec2(0.1), vec2(0.5), 1.0-st);
	pct *= tr.x * tr.y;

	color = vec3(pct);
	gl_FragColor = vec4(color, 1.0);
}