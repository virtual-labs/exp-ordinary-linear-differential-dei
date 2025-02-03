#### 1. Notation:
(i.) E: collection of differentiable function <br>
(ii.) F: function from R to R <br>
(iii.) D: d/dx <br>
(iv.) D<sup>2</sup>: d/dx(d/dx) i.e. d<sup>2</sup>/dx<sup>2</sup> 
#### 2. Second order linear differential equation:
The equation <br>
y’’+Py’+Qy=f(x) 					…(i) <br>
is a second order linear differential equation with constant coefficients, where P, Q&isin;R and f:R→R is a continuous function. If f(x)=0, then such equation is called a homogeneous second order linear differential equation with constant coefficients. <br>
#### 3. Standard method of solution:
In this section, we present the standard method to obtain the solution of equation (i). <br> 

Consider the equation am<sup>2</sup>+bm+c=0, which is called the auxiliary equation. Then y(x) = c<sub>1</sub>e<sup>m</sup><sub>1</sub><sup>x</sup>+c<sub>2</sub>e<sup>m</sup><sub>2</sub><sup>x</sup>, where c<sub>1</sub>, c<sub>2</sub> are constants and m<sub>1</sub>, m<sub>2</sub> are the roots of the auxiliary equation is known as complementary function (C.F.) and is denoted by y<sub>c</sub>. <br>

A specific function g(x) which satisfies equation (i) is called particular integral (P.I.) and is denoted by y<sub>p</sub>. Any solution of equation (i) is of the form y(x)≡y<sub>c</sub>+y<sub>p</sub>=c<sub>1</sub>e<sup>m</sup><sub>1</sub><sup>x</sup>+c<sub>2</sub>e<sup>m</sup><sub>2</sub><sup>x</sup>+g(x). This is called the complete integral (C.I.). <br>

In particular, if f(x)=0, then complementary function gives all solutions of equation (i), so that C.I.=C.F, that is its solution is given by y(x) = c<sub>1</sub>e<sup>m</sup><sub>1</sub><sup>x</sup>+c<sub>2</sub>e<sup>m</sup><sub>2</sub><sup>x</sup>, where  c<sub>1</sub>, c<sub>2</sub> are constants and  m<sub>1</sub>, m<sub>2</sub> are the roots of the auxiliary equation am<sup>2</sup> +bm+c=0 <br>

**Note.** There are typical approaches for calculating particular integral, but here we will consider hit and trial approach only. 
#### 4. Examples:
(i.) Let y’’-y=0 be a homogeneous second order linear differential equation. Then y’’=D<sup>2</sup>(y), which implies that (D<sup>2</sup>-I)y=0. Clearly auxiliary equation is m<sup>2</sup>-1=0, thus m=1, -1. Then the complementary function and hence the complete integral of this equation is c1ex+c2e-x, where c<sub>1</sub>, c<sub>2</sub> are constants.

(ii.) Let y’’-y=2sinx be the second order linear differential equation. Let y’’=D2(y). Then (D2-1)y=2sinx, y=-sinx satisfies this equation. It can be seen that -sinx is a particular integral of this equation. Thus complete integral is C<sub>1</sub>e<sup>x</sup>+C<sub>2</sub>e<sup>-x</sup> -sinx, where c<sub>1</sub>, c<sub>2</sub> are constants.
#### 5. Understanding:
##### 5.1. Collection of differentiable functions as a vector space:
Collection of differentiable functions E from R to R is a vector space over R with addition and scalar multiplication of functions.
##### 5.2. Derivative as an operator:
Notion of derivative is well known. It operates on functions. Thus d/dx is a function from the collection of differentiable functions to collection of functions. It is denoted by D and is called differential operator.
##### 5.3. Operator defined by differential equation:
Let y’’+py’+qy=f(x), where p, q&isin;R be a given linear differential equation of second order. Then (D<sup>2</sup>+pD+qI)(y)=r, where D<sup>2</sup>(y)= y’’, D(y)=y’ and I is the identity operator. Thus the L.H.S. of the given equation provides the operator D<sup>2</sup>+pD+qI which is called the operator defined by the given differential equation.
##### 5.4. Linear map equation defined by a given differential equation:
Let y’’+py’+qy=f(x), where p, q&isin;R be a given linear differential equation of second order. Then this can be written as T(y)=r, where T:F→F is the operator as defined in Section 5.3 so that T=D<sup>2</sup>+pD+qI. This is the desired linear map equation T(y)=r given by the differential equation.
##### 5.5. Solution of differential equation:
Recall that solution set of a linear map T(y)=r, as described in Section 5.4, is y<sub>o</sub>+kerT, where y<sub>o</sub> is its particular solution and kerT is the collection of all solutions of T(y)=0. Notice that linear map equation is just another form of the given differential equation. Therefore its solutions are also the solution of given differential equation.

As given in Section 3, a solution of linear differential equation is given by y<sub>c</sub>+y<sub>p</sub>, where y<sub>c</sub> is a solution of the homogenous counterpart of the given differential equation and y<sub>c</sub> is a particular solution of the given differential equation. Here it may be noted that y<sub>p</sub> corresponds to y<sub>o</sub> and y<sub>c</sub> corresponds to an element of kerT.
##### 5.6. Example: 
Let y’’-5y’+6y=2e<sup>x</sup> be the given differential equation. <br>
**Standard method for solution:** <br>
(a) The auxiliary equation is m<sup>2</sup>-5m+6=0, i.e. (m-2)(m-3)=0. Thus m=2, 3. Then the complementary function of the given differential equation is c<sub>1</sub>e<sup>3x</sup>+c<sub>2</sub>e<sup>2x</sup>, wherec<sub>1</sub>, c<sub>2</sub> are constants. <br>
(b) Clearly y=e<sup>x</sup> satisfies the given differential equation. Thus e<sup>x</sup> is a particular integral. <br>
(c) Thus complete integral y(xc<sub>1</sub>e<sup>3x</sup>+c<sub>2</sub>e<sup>2x</sup>+e<sup>x</sup>, where c<sub>1</sub>, c<sub>2</sub> are constants. <br>
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
