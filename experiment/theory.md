<span style="font-family: 'Times New Roman'; font-size: 22px;">It is well known that linear ordinary differential equations with constant coefficients are used in solving engineering problems. This experiment will help in building a clear understanding of the mathematical ideas behind the standard method of finding solutions of these equations.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">1. Notation:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">(i.) <i>E</i>: collection of differentiable function <br>
(ii.) <i>F</i>: function from <i>R</i> to <i>R</i> <br>
(iii.) <i>D</i>: <i>d</i>/<i>dx</i> <br>
(iv.) <i>D</i><sup>2</sup>: <i>d</i>/<i>dx</i>(<i>d</i>/<i>dx</i>) i.e. <i>d</i><sup>2</sup>/<i>dx</i><sup>2</sup> 
<br>
This experiment is not focused on learning the standard method of solution.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">2. Second order linear differential equation:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">The equation <br>
<i>y</i>’’+<i>Py</i>’+<i>Qy</i>=<i>f</i>(<i>x</i>) 					…(i) <br>
is a second order linear differential equation with constant coefficients, where <i>P, Q</i>&isin;<i>R</i> and <i>f</i>:<i>R</i>→<i>R</i> is a continuous function. If <i>f</i>(<i>x</i>)=0, then such equation is called a homogeneous second order linear differential equation with constant coefficients.
It is well known that linear ordinary differential equations with constant coefficients are used in solving engineering problems.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">3. Standard method of solution:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">In this section, we present the standard method to obtain the solution of equation (i). 
<br> 
Consider the equation <i>am</i><sup>2</sup>+<i>bm</i>+<i>c</i>=0, which is called the auxiliary equation. Then <i>y</i>(<i>x</i>) = <i>c</i><sub>1</sub><i>e</i><sup><i>m</i></sup><sub>1</sub><sup><i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup><i>m</i></sup><sub>2</sub><sup><i>x</i></sup>, where <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants and <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> are the roots of the auxiliary equation is known as complementary function (C.F.) and is denoted by <i>y</i><sub><i>c</i></sub>. <br><br>
A specific function <i>g</i>(<i>x</i>) which satisfies equation (<i>i</i>) is called particular integral (P.I.) and is denoted by <i>y</i><sub><i>p</i></sub>. Any solution of equation (<i>i</i>) is of the form <i>y</i>(<i>x</i>)≡<i>y</i><sub><i>c</i></sub>+<i>y</i><sub><i>p</i></sub>=<i>c</i><sub>1</sub><i>e</i><sup><i>m</i></sup><sub>1</sub><sup><i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup><i>m</i></sup><sub>2</sub><sup><i>x</i></sup>+<i>g</i>(<i>x</i>). This is called the complete integral (C.I.). <br><br>
In particular, if <i>f</i>(<i>x</i>)=0, then complementary function gives all solutions of equation (<i>i</i>), so that C.I.=C.F, that is its solution is given by <i>y</i>(<i>x</i>) = <i>c</i><sub>1</sub><i>e</i><sup><i>m</i></sup><sub>1</sub><sup><i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup><i>m</i></sup><sub>2</sub><sup><i>x</i></sup>, where  <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants and  <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> are the roots of the auxiliary equation <i>am</i><sup>2</sup>+<i>bm</i>+<i>c</i>=0 <br><br>
<b>Note.</b> There are typical approaches for calculating particular integral, but here we will consider hit and trial approach only. </span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">4. Examples and explanation matrix:</span>**<br>
**<span style="font-family: 'Times New Roman'; font-size: 22px;">4.1. Examples:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">(i.) Let <i>y</i>’’-<i>y</i>=0 be a homogeneous second order linear differential equation. Then <i>y</i>’’=<i>D</i><sup>2</sup>(<i>y</i>), which implies that (<i>D</i><sup>2</sup>-<i>I</i>)<i>y</i>=0. Clearly auxiliary equation is <i>m</i><sup>2</sup>-1=0, thus <i>m</i>=1, -1. Then the complementary function and hence the complete integral of this equation is <i>c</i><sub>1</sub><i>e</i><sup><i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup>-<i>x</i></sup>, where <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants.
<br>
(ii.) Let <i>y</i>’’-<i>y</i>=2sin<i>x</i> be the second order linear differential equation. Let <i>y</i>’’=<i>D</i><sup>2</sup>(<i>y</i>). Then (<i>D</i><sup>2</sup>-1)<i>y</i>=2sin<i>x</i>, <i>y</i>=-sin<i>x</i> satisfies this equation. It can be seen that -sin<i>x</i> is a particular integral of this equation. Thus complete integral is <i>C</i><sub>1</sub><i>e</i><sup><i>x</i></sup>+<i>C</i><sub>2</sub><i>e</i><sup>-<i>x</i></sup> -sin<i>x</i>, where <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">4.2 Summary:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Examples given in Section 4.1 are summarized in explanation matrix given below.</span>
![Summary](images/exp10imageaddition.PNG "Summary")

**<span style="font-family: 'Times New Roman'; font-size: 22px;">5. Understanding:</span>** <br>
**<span style="font-family: 'Times New Roman'; font-size: 22px;">5.1. Collection of differentiable functions as a vector space:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Collection of differentiable functions <i>E</i> from <i>R</i> to <i>R</i> is a vector space over <i>R</i> with addition and scalar multiplication of functions.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">5.2. Derivative as an operator:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Notion of derivative is well known. It operates on functions. Thus <i>d</i>/<i>dx</i> is a function from the collection of differentiable functions to collection of functions. It is denoted by <i>D</i> and is called differential operator.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">5.3. Operator defined by differential equation:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>y</i>’’+<i>py</i>’+<i>qy</i>=<i>f</i>(<i>x</i>), where <i>p, q</i>&isin;<i>R</i> be a given linear differential equation of second order. Then (<i>D</i><sup>2</sup>+<i>pD</i>+<i>qI</i>)(<i>y</i>)=<i>r</i>, where <i>D</i><sup>2</sup>(<i>y</i>)= <i>y</i>’’, <i>D</i>(<i>y</i>)=<i>y</i>’ and <i>I</i> is the identity operator. Thus the L.H.S. of the given equation provides the operator <i>D</i><sup>2</sup>+<i>pD</i>+<i>qI</i> which is called the operator defined by the given differential equation.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">5.4. Linear map equation defined by a given differential equation:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>y</i>’’+<i>py</i>’+<i>qy</i>=<i>f</i>(<i>x</i>), where <i>p, q</i>&isin;<i>R</i> be a given linear differential equation of second order. Then this can be written as <i>T</i>(<i>y</i>)=<i>r</i>, where <i>T</i>:<i>F</i>→<i>F</i> is the operator as defined in Section 5.3 so that <i>T</i>=<i>D</i><sup>2</sup>+<i>pD</i>+<i>qI</i>. This is the desired linear map equation <i>T</i>(<i>y</i>)=<i>r</i> given by the differential equation.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">5.5. Solution of differential equation:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Recall that solution set of a linear map <i>T</i>(<i>y</i>)=<i>r</i>, as described in Section 5.4, is <i>y</i><sub><i>o</i></sub>+ker<i>T</i>, where <i>y</i><sub><i>o</i></sub> is its particular solution and ker<i>T</i> is the collection of all solutions of <i>T</i>(<i>y</i>)=0. Notice that linear map equation is just another form of the given differential equation. Therefore its solutions are also the solution of given differential equation.</span>

<span style="font-family: 'Times New Roman'; font-size: 22px;">As given in Section 3, a solution of linear differential equation is given by <i>y</i><sub><i>c</i></sub>+<i>y</i><sub><i>p</i></sub>, where <i>y</i><sub><i>c</i></sub> is a solution of the homogenous counterpart of the given differential equation and <i>y</i><sub><i>c</i></sub> is a particular solution of the given differential equation. Here it may be noted that <i>y</i><sub><i>p</i></sub> corresponds to <i>y</i><sub><i>o</i></sub> and <i>y</i><sub><i>c</i></sub> corresponds to an element of ker<i>T</i>.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">5.6. Example: </span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>y</i>’’-5<i>y</i>’+6<i>y</i>=2<i>e</i><sup><i>x</i></sup> be the given differential equation. <br>
<b>Standard method for solution:</b> <br>
(a) The auxiliary equation is <i>m</i><sup>2</sup>-5<i>m</i>+6=0, i.e. (<i>m</i>-2)(<i>m</i>-3)=0. Thus <i>m</i>=2, 3. Then the complementary function of the given differential equation is c<sub>1</sub>e<sup>3x</sup>+c<sub>2</sub>e<sup>2x</sup>, where<i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants. <br>
(b) Clearly <i>y</i>=<i>e</i><sup><i>x</i></sup> satisfies the given differential equation. Thus <i>e</i><sup><i>x</i></sup> is a particular integral. <br>
(c) Thus complete integral <i>y</i>(<i>x</i>)=<i>c</i><sub>1</sub><i>e</i><sup>3<i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup>2<i>x</i></sup>+<i>e</i><sup><i>x</i></sup>, where <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants. <br>
<b>Verification:</b>  <br>
Substituting the value of <i>y</i>(<i>x</i>) obtained above, in the given differential equation, it comes out to be equal to 2<i>e</i><sup><i>x</i></sup> which is the R.H.S. of the given differential equation. <br>
<b>Understanding of complete integral:</b>  <br>
This provides an illustration of the understanding provided in Section 5, i.e understanding as to why the standard method as given in Section 3 provides all solutions of the given differential equation. <br>
The linear map arising out of the given differential equation is <i>T</i>≡<i>D</i><sup>2</sup>-5<i>D</i>+6<i>I</i> and the linear map equation is T(y)=2ex. The solution set of linear map equation is the solution set of the given differential equation. </span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">6. Example (Engineering problem):</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">In an RLC circuit, at <i>t</i>=0, a current of 2 ampere flows with resistance <i>R</i>=40 ohm, inductance <i>L</i>=2/5 henry, and capacitance <i>C</i>=10<sup>−2</sup> farad. The current <i>I</i>≡<i>dQ</i>/<i>dt</i> is to be determined, where <i>Q</i> is the charge flowing in the circuit at <i>t</i>>0 if <i>Q</i>(0)=1, <i>Q′</i>(0)=2. It is assumed here that voltage <i>E</i>(<i>t</i>)=0, for <i>t</i>>0. <br><br>
The given problem is mathematically represented by an initial value problem: the differential equation for the charge <i>Q</i> across the circuit using Kirchhoff’s law is 2/5<i>Q′′</i>+40<i>Q′</i>+100<i>Q</i>=<i>E</i>(<i>t</i>) and the initial condition are <i>Q</i>(0)=1, <i>Q′</i>(0)=2. To find its solution and the required current, we proceed as follows.  <br>
The given differential equation reduces to 2<i>Q′′</i>+200<i>Q′</i>+500<i>Q</i>=0. The auxiliary equation of the given differential equation is 2<i>m</i><sup>2</sup>+200<i>m</i>+500=0. Thus <i>m</i>=130 or 70. Therefore the complete integral of the given differential equation is     <br>                                                 
                      <i>Q</i>=<i>c</i><sub>1</sub><i>e</i><sup>130<i>t</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup>70<i>t</i></sup>,                      …(<i>i</i>) <br>
where <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants. Now differentiating equation (<i>i</i>) yields  <br>
                           <i>Q′</i>=130<i>c</i><sub>1</sub><i>e</i><sup>130<i>t</i></sup>+70<i>c</i><sub>2</sub><i>e</i><sup>70<i>t</i></sup>,           … (<i>ii</i>)  <br>
Using given initial conditions, we obtain <i>c</i><sub>1</sub>+<i>c</i><sub>2</sub>=<i>Q</i>(0)=1 and 130<i>c</i><sub>1</sub>+70<i>c</i><sub>2</sub>=<i>Q′</i>(0)=2. Therefore <i>c</i><sub>2</sub>=128/60 and <i>c</i><sub>1</sub>=-68/60. Thus <i>Q</i>=128/60<i>e</i><sup>130<i>t</i></sup>-68/60<i>e</i><sup>70<i>t</i></sup>. Required current <i>I</i>≡<i>dQ</i>/<i>dt</i>=130.(128/60)<i>e</i><sup>130<i>t</i></sup>+70.(-68/60)<i>e</i><sup>70t</sup>.</span>
