import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About | MadDogTU</title>
      </Helmet>
      
      {/* MAIN CONTENT */}
      <section className="content">
        <div className="content-container">
          <h2>Board Members</h2>
          <p className="main-text">
            Clark Amadon, Board Member, Conservation and Trout in the Classroom Coordinator
            <br></br><br></br>
            Samantha Aronson, Chapter Vice President
            <br></br><br></br>
            Kurt Budliger, Board Member
            <br></br><br></br>
            Jared Carpenter, Chapter President
            <br></br><br></br>
            Brian Divelbliss, Board Member
            <br></br><br></br>
            Maggie Jones, Chapter Treasurer
            <br></br><br></br>
            Daphne Zencey, Chapter Secretary
          </p>
        </div>
        
        <br></br><br></br>

        {/* Whats in a name? */}
        <div className="content-container">
          <h2>Mad Dog History</h2>
          <p className="main-text">
            The MadDog Chapter is one of six Vermont Chapters of the national <a 
              className="inline-link" href="https://tu.org/" target="_blank">Trout Unlimited
            </a> organization. 
            Nationwide, there are over 385 chapters and state councils dedicated to the restoration and protection of coldwater fisheries, making 
            their local streams and rivers cleaner, colder and healthier.
            <br></br><br></br>
            The MadDog Chapter is located in central Vermont and is so-named after the Mad and Dog Rivers, tributaries of the Winooski River. 
            Our boundaries encompass most of the Winooski River watershed and a center portion of the Lamoille River watershed.
            <br></br><br></br>
            The Chapter was formed in 1986 by its first president, Vince Rossano, with encouragement from Dr. Bill Allard and a little later 
            from Budd Shedaker. Others that were instrumental in the chapter’s founding included Mike Karnedy, Phil Stacy, Steve Sanderson, 
            Chris Wagner, Brian Kooicker, Bill Albert, Cliff Cloud and Mike Gallant – with much help from many other friends. Over the years, 
            the Chapter has ebbed and flowed, with the reconstitution of what has become the current chapter owing thanks to the efforts of 
            Tom Murray, David Kenney, John Mudgett, Lawton Weber and Clark Amadon.
            <br></br><br></br>
            Today, the MadDog Chapter is engaged in local conservation efforts as well as programs to keep people involved in our local rivers, 
            particularly through fishing. The Chapter also coordinates the Trout in the Classroom (TIC) program with 14 school in our region. 
            TIC is a robust science curriculum for elementary and middle schools where school raise brook trout from eggs to the fry stage. There 
            are over 100 TICs in Vermont schools.
            <br></br><br></br>
            This current year of 2026 was the twelfth year for the five-day Vermont Trout Camp for Teens, a statewide program in which MadDog 
            was instrumental in founding. It was the third year of Women’s Introduction to Fly Fishing, a weekend program to introduce women 
            to fly fishing and stream ecology. It is also the third year that MadDog hosted the Fly Fishing Film Tour and the sixth year for 
            fly tying classes.
            <br></br><br></br>
            So, come join the MadDog Chapter and be part of a group that is dedicated to the protection and restoration of central Vermont’s 
            coldwater fisheries.
          </p>
        </div>
      </section>
    </div>
  );
}