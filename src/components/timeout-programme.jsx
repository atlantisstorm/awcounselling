import React from 'react';

const TimeoutProgramme = ({ onClick }) => {
  return (
    <>
      <h5>Time out programme</h5>

      <p>Time out is a programme I developed for the Impact of Alcohol Programme for Action Mental Health New Horizons Enniskillen.  I facilitated this programme for three years and due to the success of it we secured an extra years funding so four years in total.  It was run on a weekly basis for two hours giving the service users time to discuss each topic.  This was an open-ended group and received A.C.I. approval for 10 C.P.D. points.</p>

      <ul>
        <li>Week 1. Blocks to Recovery</li>
        <li>Week 2. Guilt and Shame</li>
        <li>Week 3. Blame</li>
        <li>Week 4. Fear and Anxiety</li>
        <li>Week 5.  Denial</li>
        <li>Week 6. Anger and Resentment</li>
        <li>Week 7. Bereavement and Loss </li>
        <li>Week 8. Chemical Dependency</li>
        <li>Week 9.Compulsive Gambling</li>
        <li>Week 10. Relapse Prevention</li>
        <li>Week 11. Self-Esteem, Self-Love and Self-Honesty</li>
        <li>Week 12. Self-Care and Change Plan</li>
      </ul>

      <p>If you wish to find out when and where the next programme will be held or would like information on how to have me present the programme for your organisation, community or group then please contact me - click <a href="/" data-testid="timeout-programme--contact" onClick={ onClick } data-name="contact">here</a> for contact details.</p>
    </>
  );
}

export default TimeoutProgramme;