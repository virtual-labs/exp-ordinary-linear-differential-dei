
// Function to check if a number is a perfect square
 function isPerfectSquare(num) {
    return num >= 0 && Math.sqrt(num) % 1 === 0;
}

// Function to handle form submission
document.getElementById('checkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get user input values
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    
    // Check if 'a' is 0, then set it to 1
    if (a === 0) {
            alert("Coefficient 'a' cannot be 0 for a second-order equation. Setting a = 1 by default.");
            a = 1;
        }

    const auxiliaryEquation = "<b id='head3'>Auxiliary Equation:</b> <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+a+"r² + "+b+"r + "+c+" = 0";
     
        // Solve the quadratic equation: r = (-b ± √(b² - 4ac)) / 2a
        const discriminant = b * b - 4 * a * c;
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // Step 3: Particular Integral (PI)
        const particularIntegral = "0"; // Homogeneous equation, so PI = 0

        // Step 4: Complementary Function (CF)
        const complementaryFunction = `\\(y(x) =  c_₁e^{${root1}x} + c_₂e^{${root2}x}\\)`;
        const CI = `\\( c_₁e^{${root1}x} + c_₂e^{${root2}x}\\)`;

        // Step 5: Complete Integral (CI)
        const completeIntegral = `${complementaryFunction} + ${particularIntegral}`;

        // Display the solution
        const solutionElement = document.getElementById("solution");
    
    const equation = '\\(y(x) = c_1 e^{m_1x}+c_2 e^{m_2x}\\)'; // Inline math
    
    // Check if the discriminant is a perfect square
    const resultElement = document.getElementById('result');
    const auxEq = document.getElementById('auxEq');
    const roots = document.getElementById('roots');
    const pi = document.getElementById('PI');
    const ci = document.getElementById('CI');
    
    if (isPerfectSquare(discriminant)) {
        resultElement.innerHTML = "<b id='head3'>Complementary Function (CF):</b><br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+complementaryFunction+" <br> <p style='text-align: center;'>where c<sub>1</sub> and c<sub>2</sub> are constants</p>"; // Use innerHTML for MathJax
         // Ask MathJax to re-process the content
         MathJax.typesetPromise([resultElement]).catch(err => console.error(err));
         auxEq.innerHTML = auxiliaryEquation;
         roots.innerHTML = "<b id='head3'>Roots:</b> <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; r<sub>1</sub> = "+root1+"; r<sub>2</sub> = "+root2+" ";
        //  pi.innerHTML = "<b id='head3'>Particular Integral (PI) by Hit and Try:</b> <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; PI = 0";
        ci.innerHTML = "<b id='head3'>All Solutions:</b> <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;CI = CF = "+CI+" <br> <p style='text-align: center;'>where c<sub>1</sub> and c<sub>2</sub> are constants</p>";
        MathJax.typesetPromise([ci]).catch(err => console.error(err));
        document.getElementById('head1').style.display ='block';
        document.getElementById('roots').style.display ='block';
        document.getElementById('PI').style.display ='block';
        document.getElementById('CI').style.display ='block';
        document.getElementById('auxEq').style.display ='block';
        resultElement.style.color = 'black';
       
    } else {
        resultElement.textContent = `The discriminant (b² - 4ac) is ${discriminant}, and it is not a perfect square.`;
        resultElement.style.color = 'red';
        document.getElementById('head1').style.display ='none';
        document.getElementById('roots').style.display ='none';
        document.getElementById('PI').style.display ='none';
        document.getElementById('CI').style.display ='none';
        document.getElementById('auxEq').style.display ='none';
    }
});
