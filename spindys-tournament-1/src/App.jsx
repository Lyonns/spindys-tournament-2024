import Navbar from "./Components/Navbar/Navbar"
import spindysImageL from './assets/spindys-2024-l.png'
import spindysImageD from './assets/spindys-2024-d.png'

import './App.css'
import { useEffect, useState } from "react"
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '/Users/tashielyonns/Documents/vscode/Spindys Tournament 1/spindys-tournament-1/firebase.js'; // Adjust the path as needed


export const App = () => {
  const [rounds, setRounds] = useState([]);
  const [judges, setJudges] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    const fetchRounds = async () => {
      const querySnapshop = await getDocs(collection(db,'rounds'));
      const roundsList = querySnapshop.docs.map(doc => doc.data());
      setRounds(roundsList);
    }
    fetchRounds();
  }, []);

  useEffect(()=>{
    const fetchJudges = async () => {
      // Query to get all participants where the judge field is true
      const q = query(collection(db, 'participants'), where('judge', '==', true));
      const querySnapshot = await getDocs(q);
      
      // Map the documents to extract data
      const judgesList = querySnapshot.docs.map(doc => doc.data());
      setJudges(judgesList);
    };
    fetchJudges(); // Fetch judges when the component mounts
  }, []);

  useEffect(() => {
    const fetchParticipants = async () => {
      const querySnapshot = await getDocs(collection(db, 'participants'));
      const participantsList = querySnapshot.docs.map(doc => doc.data());
      setParticipants(participantsList);
    };
    fetchParticipants(); // Fetch participants when the component mounts
  }, []);

  useEffect(() => {
    // Check localStorage or default to light mode
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  // Function to filter participants by round
  const getParticipantsByRound = (round) => {
    return participants.filter(p => p.round >= round);
  };

  // Function to filter participants by round and side
  const getParticipantsByRoundAndSide = (round, side) => {
    return participants.filter(p => p.round >= round && round && p.side === side);
  }

  // Functino to toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('dark-mode', newMode);
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };
  const iframeSrc = `https://embed.creator-spring.com/widget?slug=tiltpenspinning&per=8&currency=&page=1&layout=carousel-wide&theme=${isDarkMode ? 'dark' : 'light'}`;
  

  return (
    <div id="home">
      <Navbar toggleTheme={toggleTheme} />
      <div className="main-body">
        <div>
          <h1 className="spindys">Spindy's Tournament</h1>
          <img src={isDarkMode ? spindysImageD : spindysImageL} alt="Spindy's Tournament 2024" className="home-image" />
        </div>
        <h1>
          Prizes:
        </h1>
        <div className="prizes">
          <section className="prize-box">
            <div className="prizes-left">1st Place:</div>
            <div className="prizes-right">Elite 1 month<br/>Level 4 role<br/>$30</div>
          </section>
          <section className="prize-box">
            <div className="prizes-left">2nd Place:</div>
            <div className="prizes-right">Level 4 role<br/>$10</div>
          </section>
          <section className="prize-box">
            <div className="prizes-left">1st Place B side:</div>
            <div className="prizes-right">Level 3 role</div> 
          </section>         
        </div>
        
        
        <div>
          {rounds.length>0 && (
            <>
              <h1 className="title"> Results </h1>
              <div className="judges-list">
                {rounds.map((round, index) => (
                  <div key={index}>
                    <a href={round.link} target="_blank" rel="noopener noreferrer">
                      Round {round.number}
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <hr/>
        <div id="merch">
          <h1 className="title">Merch</h1>
          <h2>(Limited Edition) ends 2025</h2>
          <iframe 
            style={{ borderRadius: '24px', border: 'none' }} 
            src={iframeSrc} 
            title="tiltpenspinning Merch store powered by Spring" 
            width="100%" 
            height="420">
          </iframe>
        </div>
        <hr/>
        <div id="schedule">
          <h1 className="title">Schedule</h1>
          <p className="content">
            To register, please DM <a href="https://x.com/tilt562" target="_blank" rel="noopener noreferrer">@tilt562</a> on X/Twitter or <a href="https://discordapp.com/users/tilt_ps" target="_blank" rel="noopener noreferrer">tilt_ps</a> on Discord. Include the name you would like to be displayed.
          </p>
          <div className="schedule-grid">

            <div className="schedule-item">
              <div className="schedule-left">Registration Deadline</div>
              <div className="schedule-right">September 14, 2024</div>
            </div>

            <div className="schedule-item">
              <div className="schedule-left">Round 1 Videos</div>
              <div className="schedule-right">September 28, 2024</div>
            </div>

            <div className="schedule-item">
              <div className="schedule-left">Round 1 Results</div>
              <div className="schedule-right">October 5, 2024</div>
            </div>

            <div className="schedule-item">
              <div className="schedule-left">Round 2 Videos</div>
              <div className="schedule-right">October 19, 2024</div>
            </div>

            <div className="schedule-item">
              <div className="schedule-left">Round 2 Results</div>
              <div className="schedule-right">October 26, 2024</div>
            </div>

            <div className="schedule-item">
              <div className="schedule-left">Round 3 Videos</div>
              <div className="schedule-right">November 9, 2024</div>
            </div>

            <div className="schedule-item">
              <div className="schedule-left">Round 3 Results</div>
              <div className="schedule-right">November 16, 2024</div>
            </div>

            <div className="schedule-item">
              <div className="schedule-left">Round 4 Videos</div>
              <div className="schedule-right">November 30, 2024</div>
            </div>

            <div className="schedule-item">
              <div className="schedule-left">Round 4 Results</div>
              <div className="schedule-right">December 7, 2024</div>
            </div>

          </div>
        </div>

        <div/>
        <hr/>
        <div id="participants">
          <h1 className="title">Participants</h1>
          <div className="content">

            {/* Round 1 */}
            <div className="round-section">
              <h2>Round 1</h2>
              <div className="round-grid">
                {getParticipantsByRound(1).map((participant, index) => (
                  <div key={index} className="participant-item">
                    {participant.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Rounds 2 through 4 */}
            {[2, 3, 4, 5].map((round) => (
            <div className="round-section" key={round}>
              <h2>{round === 5 ? 'Winners' : `Round ${round}`}</h2>
              <div className="round-sides">
                <div className="side">
                  <h3>B Side</h3>
                  <ul>
                    {getParticipantsByRoundAndSide(round, 'B').map((participant, index) => (
                      <li key={index}>{participant.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="side">
                  <h3>A Side</h3>
                  <ul>
                    {getParticipantsByRoundAndSide(round, 'A').map((participant, index) => (
                      <li key={index}>{participant.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div/>
        <hr/>
        <div id="judges">
          <h1 className="title">Judges</h1>
            <div className="judges-list">
              {judges.map((judge, index) => (
                <div key={index}>
                  <a href={judge.link} target="_blank" rel="noopener noreferrer">
                    {judge.name}
                  </a>
                </div>
              ))}
          </div>
        </div>
        <div/>
        <hr/>
        <div id="rulebook">
          <h1 className="title">Rulebook</h1>
          <h2>Registration</h2>
          <p className="content">
            Anyone and everyone is free to register in Spindy's Tournament. All you have to do is DM either @tilt562 on X/Twitter or DM tilt_ps on Discord with your desired name you wish to be used in the tournament.
          </p>
          <p className="content">
            Registration will close on September 14, 2024, 23:59 PDT.
          </p>
          <h2>Structure</h2>
          <p className="content">
            The first round is a battle royal style round where every participants battles in a large pool of every participants. The top 16 move onto Side A, the next 16 move onto Side B, and the rest fail. Round 2 now has Side A and Side B, each with 16 members. Round 2 will also be a battle royal style where the top 4 from each group pass and the remaining 12 from each group fail. In round 3, the semifinals, there will be 2 1v1s per group, then in round 4, the final round, it will be one 1v1 to determine the winner.
          </p>
          <p className="content">
            Between each round, there will be a total of 3 weeks. 1 week for judging and 2 weeks for the participants to make their combos, however participants are not discouraged from prefilming, ie. filming their combos before the round has started.
          </p>
          <p className="content">
            Results from judges are taken by getting the Geometric Mean so as to account for outliers in judging style.
          </p>
          <h2>Prize</h2>
          <p className="content">
            The winner of Side A will be awarded 1 month of Spindy's Elite as well as a unique level 4 role in the Spindy's Discord server and a prize of $30.
          </p>
          <p className="content">
            The participant who judges deem had the best combo in the tournament other than the winner will receive a unique level 4 role in Spindy's along with a consolation prize of $10.
          </p>
          <p className="content">
            The winner of Side B will be awarded a unique level 3 role in the Spindy's Discord. 
          </p>
        </div>
      </div>
    </div>
  )
}
export default App