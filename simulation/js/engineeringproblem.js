const canvas = document.getElementById('rlcCircuit');
        const ctx = canvas.getContext('2d');

        ctx.lineWidth = 3.5;
        ctx.font = '16px Arial';

        function drawResistor(x, y) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            const segmentWidth = 6;
            const segmentHeight = 10;
            for (let i = 0; i < 10; i++) {
                if (i % 2 === 0) {
                    ctx.lineTo(x + segmentWidth * (i + 1), y - segmentHeight);
                } else {
                    ctx.lineTo(x + segmentWidth * (i + 1), y + segmentHeight);
                }
            }
            ctx.lineTo(x + segmentWidth * 11, y);
            ctx.stroke();
        }

        function drawCircuit(R, L, C) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(200, 100);
            ctx.lineTo(90, 100);
            ctx.moveTo(265, 100);
            ctx.lineTo(450, 100);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(450, 210);
            ctx.lineTo(450, 300);
            ctx.moveTo(450, 100);
            ctx.lineTo(450, 150);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(260, 300);
            ctx.lineTo(90, 300);
            ctx.moveTo(450, 300);
            ctx.lineTo(280, 300);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(150, 300);
            ctx.lineTo(150, 100);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(90, 180);
            ctx.lineTo(90, 100);
            ctx.moveTo(90, 300);
            ctx.lineTo(90, 200);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(60, 200);
            ctx.lineTo(120, 200);
            ctx.moveTo(70, 180);
            ctx.lineTo(110, 180);
            ctx.fillText('-', 52, 185);
            ctx.fillText('+', 48, 205);
            ctx.fillText('5 V', 50, 230);
            ctx.stroke();

            drawResistor(200, 100);
            ctx.fillText(`R = ${R} Ω`, 270, 80);

            ctx.beginPath();
            ctx.moveTo(260, 270);
            ctx.lineTo(260, 330);
            ctx.moveTo(280, 270);
            ctx.lineTo(280, 330);
            ctx.stroke();
            ctx.fillText(`C = ${C} F`, 300, 320);

            const img = new Image();
            img.src = 'inductor-line-icon-lg.png';
            img.onload = () => {
                ctx.drawImage(img, 407, 140, 75, 75);
                ctx.fillText(`L = ${L} H`, 470, 220);
            };

            ctx.fillStyle = 'black';
            ctx.font = '18px Arial';
            ctx.fillText('RLC Circuit', 250, 40);
        }

        function updateCircuit() {
            const R = parseFloat(document.getElementById("resistance").value);
            const L = parseFloat(document.getElementById("inductance").value);
            const C = parseFloat(document.getElementById("capacitance").value);

            document.getElementById('resistance-value').textContent = R;
            document.getElementById('inductance-value').textContent = L.toFixed(2);
            document.getElementById('capacitance-value').textContent = C.toFixed(4);

            drawCircuit(R, L, C);
        }

        document.getElementById('resistance').addEventListener('input', updateCircuit);
        document.getElementById('inductance').addEventListener('input', updateCircuit);
        document.getElementById('capacitance').addEventListener('input', updateCircuit);

        drawCircuit(10, 0.1, 0.001);
    </script>

<script>
 
 function updateEquation() {
    const R = parseFloat(document.getElementById("resistance").value);
    const L = parseFloat(document.getElementById("inductance").value);
    const C = parseFloat(document.getElementById("capacitance").value);

    // Format the equation
    const equation = `
        \\[
        ${R} \\frac{d^2Q}{dt^2} + ${L} \\frac{dQ}{dt} + ${C}  = 5
        \\]
    `;
    
    // Update the equation in the HTML
    document.getElementById("auxEq").innerHTML = equation;
    

    // Render the equation using MathJax
    MathJax.typeset();
    document.getElementById("auxEq").style.display= "block";
    document.getElementById("head1").style.display= "block";
    document.getElementById("note").style.display= "block";
    document.getElementById("auxEq2").style.display= "block";
}


// Initial call to set the default equation
updateEquation();

    
    