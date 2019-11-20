#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main(){
	float rt = abs(sin(u_time * 3.2));
	float gt = abs(sin(u_time * 1.9));
	float bt = abs(sin(u_time * 2.2));
	gl_FragColor = vec4(rt, gt, bt, 1.);	
}