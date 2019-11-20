#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;

float plot(vec2 st, float pct){
	return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
}

void main(){
	vec2 st = gl_FragCoord.xy / u_resolution;

	float y = pow(st.x, PI);
	// float y = sqrt(st.x-0.5);

	vec3 color = vec3(y);

	float pct = plot(st, y);
	color = (1.-pct)*color+pct*vec3(0.,1.,0.);

	gl_FragColor = vec4(color, 1.);
}