#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
	vec2 st = gl_FragCoord.xy / u_resolution;
	float pct = 0.0;

	// float beat = abs(sin(u_time) / 2.)-0.8;
	// a. The DISTANCE from the pixel to the center
	// pct = smoothstep(0.4, 0.08 + beat, distance(st, vec2(0.5)));

	// b. The LENGTH of the vector from the pixel to the center
	// vec2 toCenter = vec2(0.5)-st;
	// pct = length(toCenter);

	// c. The SQUARE ROOT of the vector from the pixel to the center
	// vec2 tC = vec2(0.5)-st;
	// pct = sqrt(tC.x*tC.x+tC.y*tC.y);

	pct = distance(st,vec2(0.4)) + distance(st,vec2(0.6));
	pct = distance(st,vec2(0.4)) * distance(st,vec2(0.6));
	pct = min(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
	pct = max(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
	pct = pow(distance(st,vec2(0.4)),distance(st,vec2(0.6)));

	vec3 color = vec3(pct);
	gl_FragColor = vec4(color, 1.0);
}