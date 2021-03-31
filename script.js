//change the color to a darker or lighter
//input have to be an rgb ex: "#fff"
//default color is Blue
function LightenDarkenColor(col, amt) {
	var usePound = false;

	if (col[0] == '#') {
		col = col.slice(1);
		usePound = true;
	}

	var num = parseInt(col, 16);

	var r = (num >> 16) + amt;

	if (r > 255) r = 255;
	else if (r < 0) r = 0;

	var b = ((num >> 8) & 0x00ff) + amt;

	if (b > 255) b = 255;
	else if (b < 0) b = 0;

	var g = (num & 0x0000ff) + amt;

	if (g > 255) g = 255;
	else if (g < 0) g = 0;

	return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}
// the big svg shapes with some @keyframe animations
const svg = `
<svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
<style>
			:root {
				--dark-color: #4e919f;
				--light-color:#2c8f89;
			}
			svg {
				cursor: pointer;
			}
			#darkGroup {
				fill: var(--dark-color);
			}
			#lightGroup {
				fill: var(--light-color);
			}
			#dark1 {
                animation : move2 1s ease forwards infinite alternate;
            }
			#dark2{
                animation : move3 1s ease forwards infinite alternate;
            }
			#origin {
				animation: move1 1s ease forwards infinite alternate;
			}
            @keyframes move1 {
                from {
                    transform: translateX(0%);
                }
                to {
                    transform: translateX(20%);
                }
            }
            @keyframes move2 {
                from {
                    transform: translateX(-100%)
                }
                to {
                    transform: translateX(0%)
                }
            }
            @keyframes move3 {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(20%);
                }
            }
		</style>
			<g id="triangles" clip-path="url(#clip0)">
				<g id="darkGroup">
					<path id="dark2" d="M76.5 45.9019C78.5 47.0566 78.5 49.9434 76.5 51.0981L45.75 68.8516C43.75 70.0063 41.25 68.5629 41.25 66.2535V30.7465C41.25 28.4371 43.75 26.9937 45.75 28.1484L76.5 45.9019Z" fill-opacity="0.6" />
					<path id="dark1" d="M47.5 45.9019C49.5 47.0566 49.5 49.9434 47.5 51.0981L16.75 68.8516C14.75 70.0063 12.25 68.5629 12.25 66.2535V30.7465C12.25 28.4371 14.75 26.9937 16.75 28.1484L47.5 45.9019Z" fill-opacity="0.6" />
				</g>
				<g id="lightGroup">
					<path id="origin" d="M47.5 45.9019C49.5 47.0566 49.5 49.9434 47.5 51.0981L16.75 68.8516C14.75 70.0063 12.25 68.5629 12.25 66.2535V30.7465C12.25 28.4371 14.75 26.9937 16.75 28.1484L47.5 45.9019Z" fill-opacity="0.6" />
				</g>
			</g>
		</svg>
`;
//the console log function modified with some arrow animation at the start
//it take two attribute a text-to color : @string and color : @string
//
const logArrow = (e, color) => {
	color = color ?? '#4e919f';
	const svg2 = svg.replace('#4e919f', color);
	const svg3 = svg2.replace('#2c8f89', LightenDarkenColor(color, -40));
	const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg3)}`;
	const inital = `%c ${e} `;
	const style = `
                    background-image: url(${svgDataUrl});
                    padding-right:15px;
                    background-size: 30px;
                    background-repeat: no-repeat;
                    color:${color};
                    text-indent:25px;
                    line-height:25px;
                `;
	return Function.prototype.bind.call(console.log, console, inital, style);
};
//to invok this function
//unstead of using Console.log now you can
//!use- presentArrow ('the thing that you want to console log' )

const reArrow = logArrow('text with the first function invocation', '#9f4e64');

//exemple
reArrow('test');
