 function blinkDots(dot1, dot2, dot3) {
      return new Promise(resolve => {
        let count = 0;
        let cycle = 0;

        const interval = setInterval(() => {
          dot1.style.visibility = 'visible';
          dot2.style.visibility = (count > 0) ? 'visible' : 'hidden';
          dot3.style.visibility = (count > 1) ? 'visible' : 'hidden';

          count = (count + 1) % 3;

          if (count === 0) {
            cycle++;
          }

          if (cycle === 3) {
            clearInterval(interval);
            resolve();
          }
        }, 400);
      });
    }

    async function showLinesSequentially() {
      const lines = [
        { line: "line1", dots: ["dot1-1", "dot1-2", "dot1-3"] },
        { line: "line2", dots: ["dot2-1", "dot2-2", "dot2-3"] },
        { line: "line3", dots: ["dot3-1", "dot3-2", "dot3-3"] },
        { line: "line4", dots: ["dot4-1", "dot4-2", "dot4-3"] },
        { line: "line5", dots: ["dot5-1", "dot5-2", "dot5-3"] }
      ];

      for (let l of lines) {
        const line = document.getElementById(l.line);
        const [d1, d2, d3] = l.dots.map(id => document.getElementById(id));
        line.style.display = 'block';
        await blinkDots(d1, d2, d3);
      }
    }

    showLinesSequentially();