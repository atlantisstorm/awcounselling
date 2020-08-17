import React from 'react';

const FamilyProgramme = ({ onClick }) => {
  return (
    <>
      <h5>One Day Family Programme</h5>

      <p>I facilitate a one-day education/family programme to help create awareness about addiction and its effects on the addicted person and their family.</p>

      <p>Who is the programme aimed at? :</p>
      <ul>
        <li>Family and friends of people who use and abuse alcohol, drugs and/or gambling.</li>
        <li>People who are worried about their own use or abuse of alcohol, drugs or gambling.</li>
        <li>People who work or intend to work with people who suffer from addictions.</li>
        <li>This workshop has received A.C.I. approval for 6 C.P.D. points.</li>
      </ul>

      <p>Topics discussed :</p>
      <ul>
        <li>Chemical dependency</li>
        <li>Compulsive gambling</li>
        <li>Understanding the 12 steps of recovery</li>
        <li>Effects on the family and the different family roles</li>
        <li>Co-dependency</li>
        <li>How we enable addiction and how to detach from it</li>
        <li>Self-care</li>
        <li>Guest speakers from 12 step recovery group</li>
        <li>Questions and answers</li>
      </ul>
      <p>If you wish to find out when and where the next programme will be held or would like information on how to have me present the programme for your organisation, community or group then please contact me - click <a href="/" data-testid="family-programme--contact" onClick={ onClick } data-name="contact">here</a> for contact details.</p>
    </>
  );
}

export default FamilyProgramme;