import "./Vote.css";
import { CANDIDATES } from "../../data/Data.js";
import CandidateCard from "../../Components/CandidateCard/CandidateCard.jsx";
import { useContext, useState } from "react";
import { LoginContext } from "../../Context/LoginContext.jsx";
export default function Vote() {
    const {loggedUser}=useContext(LoginContext)
    const [userVoted,setUserVoted] = useState(loggedUser.vote.voted)
    const [candidates,setCandidates] = useState(CANDIDATES)
    return (
        <div className="Vote Page">
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
    );
}
