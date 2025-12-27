It is well known that linear ordinary differential equations with constant coefficients are used in solving engineering problems. This experiment will help in building a clear understanding of the mathematical ideas behind the standard method of finding solutions of these equations.
#### 1. Notation:
(i.) <i>E</i>: collection of differentiable function <br>
(ii.) <i>F</i>: function from <i>R</i> to <i>R</i> <br>
(iii.) <i>D</i>: <i>d</i>/<i>dx</i> <br>
(iv.) <i>D</i><sup>2</sup>: <i>d</i>/<i>dx</i>(<i>d</i>/<i>dx</i>) i.e. <i>d</i><sup>2</sup>/<i>dx</i><sup>2</sup> 

This experiment is not focused on learning the standard method of solution.
#### 2. Second order linear differential equation:
The equation <br>
<i>y</i>’’+<i>Py</i>’+<i>Qy</i>=<i>f</i>(<i>x</i>) 					…(i) <br>
is a second order linear differential equation with constant coefficients, where <i>P, Q</i>&isin;<i>R</i> and <i>f</i>:<i>R</i>→<i>R</i> is a continuous function. If <i>f</i>(<i>x</i>)=0, then such equation is called a homogeneous second order linear differential equation with constant coefficients.
It is well known that linear ordinary differential equations with constant coefficients are used in solving engineering problems.<br>
#### 3. Standard method of solution:
In this section, we present the standard method to obtain the solution of equation (i). <br> 

Consider the equation <i>am</i><sup>2</sup>+<i>bm</i>+<i>c</i>=0, which is called the auxiliary equation. Then <i>y</i>(<i>x</i>) = <i>c</i><sub>1</sub><i>e</i><sup><i>m</i></sup><sub>1</sub><sup><i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup><i>m</i></sup><sub>2</sub><sup><i>x</i></sup>, where <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants and <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> are the roots of the auxiliary equation is known as complementary function (C.F.) and is denoted by <i>y</i><sub><i>c</i></sub>. <br>

A specific function <i>g</i>(<i>x</i>) which satisfies equation (<i>i</i>) is called particular integral (P.I.) and is denoted by <i>y</i><sub><i>p</i></sub>. Any solution of equation (<i>i</i>) is of the form <i>y</i>(<i>x</i>)≡<i>y</i><sub><i>c</i></sub>+<i>y</i><sub><i>p</i></sub>=<i>c</i><sub>1</sub><i>e</i><sup><i>m</i></sup><sub>1</sub><sup><i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup><i>m</i></sup><sub>2</sub><sup><i>x</i></sup>+<i>g</i>(<i>x</i>). This is called the complete integral (C.I.). <br>

In particular, if <i>f</i>(<i>x</i>)=0, then complementary function gives all solutions of equation (<i>i</i>), so that C.I.=C.F, that is its solution is given by <i>y</i>(<i>x</i>) = <i>c</i><sub>1</sub><i>e</i><sup><i>m</i></sup><sub>1</sub><sup><i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup><i>m</i></sup><sub>2</sub><sup><i>x</i></sup>, where  <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants and  <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> are the roots of the auxiliary equation <i>am</i><sup>2</sup>+<i>bm</i>+<i>c</i>=0 <br>

**Note.** There are typical approaches for calculating particular integral, but here we will consider hit and trial approach only. 
#### 4. Examples and explanation matrix:
##### 4.1. Examples:
(i.) Let <i>y</i>’’-<i>y</i>=0 be a homogeneous second order linear differential equation. Then <i>y</i>’’=<i>D</i><sup>2</sup>(<i>y</i>), which implies that (<i>D</i><sup>2</sup>-<i>I</i>)<i>y</i>=0. Clearly auxiliary equation is <i>m</i><sup>2</sup>-1=0, thus <i>m</i>=1, -1. Then the complementary function and hence the complete integral of this equation is <i>c</i><sub>1</sub><i>e</i><sup><i>x</i></sup>+<i>c</i><sub>2</sub><i>e</i><sup>-<i>x</i></sup>, where <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants.

(ii.) Let <i>y</i>’’-<i>y</i>=2sin<i>x</i> be the second order linear differential equation. Let <i>y</i>’’=<i>D</i><sup>2</sup>(<i>y</i>). Then (<i>D</i><sup>2</sup>-1)<i>y</i>=2sin<i>x</i>, <i>y</i>=-sin<i>x</i> satisfies this equation. It can be seen that -sin<i>x</i> is a particular integral of this equation. Thus complete integral is <i>C</i><sub>1</sub><i>e</i><sup><i>x</i></sup>+<i>C</i><sub>2</sub><i>e</i><sup>-<i>x</i></sup> -sin<i>x</i>, where <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> are constants.
##### 4.2 Summary:
Examples given in Section 4.1 are summarized in explanation matrix given below.
![Summary](images/exp10imageaddition.PNG "Summary")
#### 5. Understanding:
##### 5.1. Collection of differentiable functions as a vector space:
Collection of differentiable functions <i>E</i> from <i>R</i> to <i>R</i> is a vector space over <i>R</i> with addition and scalar multiplication of functions.
##### 5.2. Derivative as an operator:
Notion of derivative is well known. It operates on functions. Thus <i>d</i>/<i>dx</i> is a function from the collection of differentiable functions to collection of functions. It is denoted by <i>D</i> and is called differential operator.
##### 5.3. Operator defined by differential equation:
Let <i>y</i>’’+<i>py</i>’+<i>qy</i>=<i>f</i>(<i>x</i>), where <i>p, q</i>&isin;<i>R</i> be a given linear differential equation of second order. Then (<i>D</i><sup>2</sup>+<i>pD</i>+<i>qI</i>)(<i>y</i>)=<i>r</i>, where <i>D</i><sup>2</sup>(<i>y</i>)= <i>y</i>’’, <i>D</i>(<i>y</i>)=<i>y</i>’ and <i>I</i> is the identity operator. Thus the L.H.S. of the given equation provides the operator <i>D</i><sup>2</sup>+<i>pD</i>+<i>qI</i> which is called the operator defined by the given differential equation.
##### 5.4. Linear map equation defined by a given differential equation:
Let <i>y</i>’’+<i>py</i>’+<i>qy</i>=<i>f</i>(<i>x</i>), where <i>p, q</i>&isin;<i>R</i> be a given linear differential equation of second order. Then this can be written as <i>T</i>(<i>y</i>)=<i>r</i>, where <i>T</i>:<i>F</i>→<i>F</i> is the operator as defined in Section 5.3 so that <i>T</i>=<i>D</i><sup>2</sup>+<i>pD</i>+<i>qI</i>. This is the desired linear map equation <i>T</i>(<i>y</i>)=<i>r</i> given by the differential equation.
##### 5.5. Solution of differential equation:
Recall that solution set of a linear map <i>T</i>(<i>y</i>)=<i>r</i>, as described in Section 5.4, is y<sub>o</sub>+kerT, where y<sub>o</sub> is its particular solution and kerT is the collection of all solutions of T(y)=0. Notice that linear map equation is just another form of the given differential equation. Therefore its solutions are also the solution of given differential equation.

As given in Section 3, a solution of linear differential equation is given by y<sub>c</sub>+y<sub>p</sub>, where y<sub>c</sub> is a solution of the homogenous counterpart of the given differential equation and y<sub>c</sub> is a particular solution of the given differential equation. Here it may be noted that y<sub>p</sub> corresponds to y<sub>o</sub> and y<sub>c</sub> corresponds to an element of kerT.
##### 5.6. Example: 
Let y’’-5y’+6y=2e<sup>x</sup> be the given differential equation. <br>
**Standard method for solution:** <br>
(a) The auxiliary equation is m<sup>2</sup>-5m+6=0, i.e. (m-2)(m-3)=0. Thus m=2, 3. Then the complementary function of the given differential equation is c<sub>1</sub>e<sup>3x</sup>+c<sub>2</sub>e<sup>2x</sup>, wherec<sub>1</sub>, c<sub>2</sub> are constants. <br>
(b) Clearly y=e<sup>x</sup> satisfies the given differential equation. Thus e<sup>x</sup> is a particular integral. <br>
(c) Thus complete integral y(x)=c<sub>1</sub>e<sup>3x</sup>+c<sub>2</sub>e<sup>2x</sup>+e<sup>x</sup>, where c<sub>1</sub>, c<sub>2</sub> are constants. <br>
**Verification:**  <br>
Substituting the value of y(x) obtained above, in the given differential equation, it comes out to be equal to 2e<sup>x</sup> which is the R.H.S. of the given differential equation. <br>
**Understanding of complete integral:**  <br>
This provides an illustration of the understanding provided in Section 5, i.e understanding as to why the standard method as given in Section 3 provides all solutions of the given differential equation. <br>
The linear map arising out of the given differential equation is T≡D2-5D+6I and the linear map equation is T(y)=2ex. The solution set of linear map equation is the solution set of the given differential equation. <br>
#### 6. Example (Engineering problem): <br>
In an RLC circuit, at t=0, a current of 2 ampere flows with resistance R=40 ohm, inductance L=2/5 henry, and capacitance C=10<sup>−2</sup> farad. The current I≡dQ/dt is to be determined, where Q is the charge flowing in the circuit at t>0 if Q(0)=1, Q′(0)=2. It is assumed here that voltage E(t)=0, for t>0. <br>

The given problem is mathematically represented by an initial value problem: the differential equation for the charge Q across the circuit using Kirchhoff’s law is 2/5Q′′+40Q′+100Q=E(t) and the initial condition are Q(0)=1, Q′(0)=2. To find its solution and the required current, we proceed as follows.  <br>
The given differential equation reduces to 2Q′′+200Q′+500Q=0. The auxiliary equation of the given differential equation is 2m<sup>2</sup>+200m+500=0. Thus m=130 or 70. Therefore the complete integral of the given differential equation is     <br>                                                 
                      Q=c<sub>1</sub>e<sup>130t</sup>+c<sub>2</sub>e<sup>70t</sup>,                      …(i) <br>
where c<sub>1</sub>, c<sub>2</sub> are constants. Now differentiating equation (i) yields  <br>
                           Q′=130c<sub>1</sub>e<sup>130t</sup>+70c<sub>2</sub>e<sup>70t</sup>,           … (ii)  <br>
Using given initial conditions, we obtain c<sub>1</sub>+c<sub>2</sub>=Q(0)=1 and 130c<sub>1</sub>+70c<sub>2</sub>=Q′(0)=2. Therefore c<sub>2</sub>=128/60 and c<sub>1</sub>+=-68/60. Thus Q=128/60e<sup>130t</sup>-68/60e<sup>70t</sup>. Required current I≡dQ/dt=130.(128/60)e<sup>130t</sup>+70.(-68/60)e<sup>70t</sup>.
