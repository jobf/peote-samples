#  GLSL Beginner Tutorials from ShaderToy.com 

The fragment shader scripts in here have been imported from https://gist.github.com/JBlackCat/65c976151b53b3db8dcc849176a04161 - many thanks!

To see the originals check https://www.shadertoy.com/view/Md23DV

Where possible the scripts remain unchanged from those listed above.  This means several variables had to be made available for the scripts, for example the following.

```glsl
vec2 iResolution;
float iTime;
vec2 iMouse;
```

In certain cases these variables need translating to the expeted Shader Toy range, the tranlsations are set up in the `compose` function that is injected to the shader, see in `ShaderToy.hx`;

Once running, left or right key will change the tutorial script that is running.