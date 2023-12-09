import "./Vote.css";
import { CANDIDATES } from "../../data/Data.js";
import CandidateCard from "../../Components/CandidateCard/CandidateCard.jsx";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../Context/LoginContext.jsx";
export default function Vote() {
    const { loggedUser, usersData } = useContext(LoginContext);
    const [userVoted, setUserVoted] = useState(loggedUser.vote.voted);

    const [candidates, setCandidates] = useState(CANDIDATES);

    useEffect(() => {
        usersData.forEach((usr) => {
            let { voted, votedTo } = usr.vote;
            if (voted) {
                CANDIDATES.find(
                    (cand) => cand.name === votedTo && cand.votes++
                );
            }
        });
    }, []);

    return (
        <div className="Vote Page">
            <h1>Vote</h1>
            <div className="candidates-container">
                {candidates.map((candidate, index) => {
                    return (
                        <CandidateCard
                            candidates={candidates}
                            setCandidates={setCandidates}
                            setUserVoted={setUserVoted}
                            userVoted={userVoted}
                            key={index}
                            candidateName={candidate.name}
                            candidateImg={candidate.img}
                            candidateVotes={candidate.votes}
                        />
                    );
                })}
            </div>
        </div>
    );
}
