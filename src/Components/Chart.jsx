import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const Chart = ({ inputs, data }) => {
    const svgRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const margin = { top: 6, right: 20, bottom: 15, left: 50 };
        const width = dimensions.width - margin.left - margin.right;
        const height = dimensions.height - margin.top - margin.bottom;

        const x = d3
            .scaleTime()
            .domain(d3.extent(data, d => d[inputs.dimension]))
            .range([0, width]);

        const y = d3
            .scaleLinear()
            .domain([d3.min(data, d => d[inputs.metric]), d3.max(data, d => d[inputs.metric])])
            .nice()
            .range([height, 6]);

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const area = d3
            .area()
            .curve(d3.curveCardinal.tension(0.95))
            .defined(function (d) {
                return d[inputs.metric] >= 0;
            })
            .x(function (d) {
                return x(d[inputs.dimension]);
            })
            .y0(height)
            .y1(function (d) {
                return y(d[inputs.metric]);
            });

        const line = d3
            .line()
            .defined(d => !isNaN(d[inputs.metric]))
            .x(d => x(d[inputs.dimension]))
            .y(d => y(d[inputs.metric]));

        svg
            .append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", inputs.color)
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line);

        svg
            .append("path")
            .datum(data)
            .style("fill", "url(#mygrad)")
            .style("stroke", "none")
            .attr("d", area);

        svg
            .append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%_m-%d')));

        svg
            .append("g")
            .attr("transform", `translate(${width}, 0)`)
            .call(d3.axisRight(y));
    }, [data, dimensions, inputs]);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: svgRef.current.parentElement.offsetWidth,
                height: svgRef.current.parentElement.offsetHeight
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
            <defs>
                <linearGradient id="mygrad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor={inputs.color} stopOpacity="0.15" />
                    <stop offset="100%" stopColor={inputs.color} stopOpacity="0.01" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Chart;