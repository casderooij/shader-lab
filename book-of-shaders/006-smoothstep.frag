#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float plot(vec2 st, float pct){
	return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;

	// float y = smoothstep(0.1, 0.9, st.x);
	float y = smoothstep(0.2,0.5,st.x) - smoothstep(0.5,0.8,st.x);

	vec3 color = vec3(y);

	float pct = plot(st, y);
	color = (1.-pct)*color+pct*vec3(0., 1., 0.);

	gl_FragColor = vec4(color, 1.);	
}