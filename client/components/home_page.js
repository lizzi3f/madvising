import React, { Component } from 'react';
import '../CSS/main';
import '../CSS/media';
import '../CSS/login';
import '../CSS/logout';

const HomePage = () => {
    return(
        <table>
            <thead className="column" className="right">
                <tr id="list1">
                    <td>Advisor: <a href = "schanker.html">Dr. Jason Schanker</a></td>
                    <td>Major: Computer Science</td>
                    <td>Minor: Computer Information Systems</td>
                </tr>
            </thead>
            <tbody className="column" className="left">
                <tr id="schedule">
                  <td id="title">
                    <p>Course</p>
                    <p>Title</p>
                    <p>Start</p>
                    <p>End</p>
                  </td>
                  <td>
                    <p>CSC 3230 01</p>
                    <p>Assembly Language</p>
                    <p>3:25 PM</p>
                    <p>4:50 PM</p>
                  </td>
                  <td>
                    <p>CSC 4600 01</p>
                    <p>Internship I</p>
                    <p>5:00 PM</p>
                    <p>6:25 PM</p>
                  </td>
                  <td>
                    <p>CSC 4900 01</p>
                    <p>Capstone Seminar</p>
                    <p>12:15 PM</p>
                    <p>1:40 PM</p>
                  </td>
                  <td>
                    <p>MAT 2310 01</p>
                    <p>Discrete Math CS</p>
                    <p>12:15 PM</p>
                    <p>1:40 PM</p>
                  </td>
                </tr>	
            </tbody> 
        </table>
    )
}

export default HomePage;